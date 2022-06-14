import {Job} from "types/job";

type JobCardProps = {
    job: Job
}

export default function JobCard({ job }: JobCardProps) {
    return (
        <article className='bg-base-200 rounded-md shadow-md'>
            <div className='grid place-items-center w-12 h-12 rounded-lg translate-x-8 -translate-y-1/2' style={{backgroundColor: job.logoBackground}}>
                <img src={job.logoUrl} alt={`${job.company.name} logo`} width='50%'/>
            </div>
            <div className='px-8 pb-8'>
                <p className='text-[#6E8098]'><span>{job.postedAt} &bull; {job.contract}</span></p>
                <h1 className='font-bold text-lg'>{job.position}</h1>
                <h2 className='text-[#6E8098]'>{job.company.name}</h2>
                <h3 className='text-primary text-xs font-bold mt-11'>{job.location}</h3>
            </div>
        </article>
    )
}