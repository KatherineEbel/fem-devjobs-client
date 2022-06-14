import JobList from "components/JobList";
import JobFilter from "components/JobFilter";
import {useJobsList} from "graphql/hooks";
import {JobFilters} from "../types/job";
import {useState} from "react";

export default function Landing() {
    const [limit, setLimit] = useState(12)
    let {jobs, count, loading, error, refetch, fetchMore} = useJobsList({limit, filters: { position: '', fullTime: false, location: ''}})

    const filterJobs = async (filters: JobFilters) => {
        return refetch({filters})
    }

    if (error) return <p>Oops! something went wrong</p>

    return (
        <div className='max-w-screen-xl flex flex-col'>
            {loading && (
                <div className='grid place-items-center z-20'>
                    <button className="btn btn-ghost loading">loading</button>
                </div>
            )}
            <JobFilter onFiltersSelected={filterJobs}/>
            <JobList jobs={jobs}/>
            <button className={`btn btn-primary my-14 place-self-center ${loading ? 'loading' : ''}`}
                    disabled={jobs.length === count}
                    onClick={async () => {
                        const { length} = jobs
                        try {
                            let result = await fetchMore({
                                variables: {
                                    offset: length
                                }
                            })
                            setLimit(length + result.data.query.results.length)
                        } catch (e) {
                            console.log(e)
                        }
                    }}
            >Load More</button>
        </div>
    )
}