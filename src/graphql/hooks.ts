import {useQuery} from "@apollo/client";
import {COMPANY_QUERY, JOB_QUERY, JOBS_LIST_QUERY} from "./queries";
import {Job, JobFilterRequest} from "types/job";
// TODO: add login /create Jobs
// import {getAccessToken} from "../auth";

interface JobData {
    query: {
        results: Job[],
        count: number
    }
}

export function useJobsList({filters, limit, offset} : Partial<JobFilterRequest> = {filters: {}, limit: 12, offset: 0}) {
    console.log(filters)
    const {data, loading, error, refetch, fetchMore} = useQuery<JobData>(JOBS_LIST_QUERY, {
        fetchPolicy: 'network-only',
        notifyOnNetworkStatusChange: true,
        variables: {filters, limit, offset}
    })

    return {
        jobs: data?.query.results || [],
        count: data?.query.count || 0,
        loading,
        error: Boolean(error),
        refetch,
        fetchMore
    }
}

export function useJob(id: string) {
    const {data, loading, error} = useQuery<{ job: Job }>(JOB_QUERY, {
        variables: {id}
    })

    return {job: data?.job, loading, error: Boolean(error)}
}

export function useCompany(id: string) {
    const {data, loading, error} = useQuery(COMPANY_QUERY, {
        variables: {id}
    })

    return {company: data?.company, loading, error: Boolean(error)}
}

// export function useCreateJob() {
//   const [mutate, {loading, error }] = useMutation(CREATE_JOB_MUTATION)
//
//   async function createJob(title, description) {
//     let { data: { job } } = await mutate({
//       variables: { input: {title, description }},
//       context: {
//         headers: { 'Authorization': `Bearer ${getAccessToken()}`}
//       },
//       update: (cache, {data: {job}}, options) => {
//         cache.writeQuery({
//           query: JOB_QUERY,
//           variables: {id: job.id},
//           data: {job},
//         })
//       }
//     })
//     return job
//   }
//
//   return {
//     createJob,
//     error,
//     loading
//   }
// }