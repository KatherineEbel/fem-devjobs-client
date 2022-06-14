import {ApolloClient, gql, InMemoryCache} from '@apollo/client'

const GRAPHQL_URL = process.env.REACT_APP_GRAPHQL_API || 'http://localhost:9000/graphql'

export const client = new ApolloClient({
    uri: GRAPHQL_URL,
    cache: new InMemoryCache({
        typePolicies: {
            Query: {
                fields: {
                    jobs: {
                        keyArgs: ['filters'],
                        merge(existing, incoming, {args}) {
                            const merged = existing ? existing.slice(0) : [];

                            if (incoming) {
                                if (args) {
                                    // Assume an offset of 0 if args.offset omitted.
                                    const {offset = 0} = args;
                                    for (let i = 0; i < incoming.results.length; ++i) {
                                        merged[offset + i] = incoming.results[i];
                                    }
                                } else {
                                    // It's unusual (probably a mistake) for a paginated field not
                                    // to receive any arguments, so you might prefer to throw an
                                    // exception here, instead of recovering by appending incoming
                                    // onto the existing array.
                                    merged.push.apply(merged, incoming);
                                }
                            }

                            return merged;
                        },

                    }
                }
            }
        }
    }),
});


const JOB_LIST_FRAGMENT = gql`
    fragment JobList on Job {
        id
        postedAt
        contract
        position
        location
        logoBackground
        logoUrl
        company {
            id
            name
        }
    }
`

const JOB_DETAIL_FRAGMENT = gql`
    fragment JobDetail on Job {
        id
        apply
        contract
        description
        location
        logoBackground
        logoUrl
        position
        postedAt
        requirements {
            content
            items
        }
        role {
            content
            items
        }
        company {
            id
            name
        }
    }
`
export const JOBS_LIST_QUERY = gql`
    query Jobs($filters: JobFilterInput, $offset: Int, $limit: Int) {
        query: jobs(filters: $filters, offset: $offset, limit: $limit) {
            results {
                ...JobList
            }
            count
        }
    }
    ${JOB_LIST_FRAGMENT}
`
export const JOB_QUERY = gql`
    query Job($id: ID!) {
        job(id: $id) {
            ...JobDetail
        }
    }
    ${JOB_DETAIL_FRAGMENT}
`


export const COMPANY_QUERY = gql`
    query Company($id: ID!) {
        company(id: $id) {
            name
            description
            jobs {
                id
                position
            }
        }
    }
`

export const CREATE_JOB_MUTATION = gql`
    mutation CreateJobMutation($input: CreateJobInput!) {
        job: createJob(input: $input) {
            ...JobDetail
        }
    }
    ${JOB_DETAIL_FRAGMENT}
`

