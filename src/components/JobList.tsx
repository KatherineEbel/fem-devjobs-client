import JobCard from "./JobCard";
import {Link} from "react-router-dom";
import {Job} from "../types/job";

export default function JobList({jobs = []}: {jobs?: Job[]}) {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-10 pt-4'>
            {jobs?.map(j => (<Link key={j.id} to={`/jobs/${j.id}`}>
                <JobCard job={j}/>
            </Link>))}
        </div>
    )
}