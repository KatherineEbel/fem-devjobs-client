import JobDetailHeader from "./JobDetailHeader";
import {useJob} from "../graphql/hooks";
import {useParams} from "react-router-dom";
import JobDetailFooter from "./JobDetailFooter";

type JobDetailParams = {
    jobId: string
}

export default function JobDetail() {
    const {jobId} = useParams<JobDetailParams>()

    const { job, loading, error } = useJob(jobId || '')
    if (loading) return (
        <div className='grid place-items-center min-h-screen'>
            <button className="btn loading">loading</button>
        </div>
    )
    if (error || !job) return <p>Oops! something went wrong</p>
    return (
        <div className='max-w-screen-lg bg-base-100'>
            <JobDetailHeader job={job}/>
            <div className='bg-base-200 p-12 flex flex-col gap-4 mb-20'>
                <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-0.5 md:gap-4'>
                    <div className='md:my-12'>
                        <p className='text-[#6E8098] leading-6'><span>{job.postedAt} &bull; {job.contract}</span></p>
                        <h1 className='font-bold text-lg md:text-3xl'>{job.position}</h1>
                        <h3 className='text-primary text-xs font-bold'>{job.location}</h3>
                    </div>
                    <a href={job.apply} className='btn btn-primary w-full md:w-auto mt-14 mb-8 md:m-0'>Apply Now</a>
                </div>
                <p className='text-secondary-content leading-6'>{job.description}</p>

                <section>
                    <h2 className='text-lg font-bold text-base-content py-6'>Requirements</h2>
                    <p className='text-secondary-content leading-6'>{job.requirements.content}</p>
                    <ul className='list-disc list-outside ml-4 flex flex-col gap-5 my-6'>
                        {job.requirements.items.map((item,idx) => (<li className='text-secondary-content leading-6' key={idx}>{item}</li>))}
                    </ul>
                </section>

                <section>
                    <h2 className='text-lg font-bold text-base-content capitalize mb-7'>What you will do</h2>
                    <p className='text-secondary-content leading-6'>
                        {job.role.content}
                    </p>
                    <ol className='flex flex-col gap-5 mt-4'>
                        {job.role.items.map((item,idx) => (<li className='text-secondary-content leading-6' key={idx}>{item}</li>))}
                    </ol>
                </section>
            </div>
            <JobDetailFooter title={job.position} subtitle={job.company.name} link={job.apply}/>
        </div>
    )
}