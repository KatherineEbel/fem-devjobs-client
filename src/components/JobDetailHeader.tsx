import {Job} from "../types/job";

export default function JobDetailHeader({job}: { job: Job }) {
    return (
        <header
            className='bg-base-200 -translate-y-4 grid md:grid-cols-6 rounded-md place-items-center md:items-center md:justify-items-start w-full shadow-md'>
            <div
                className='grid place-items-center md:col-span-1 w-12 h-12 md:w-32 md:h-32 rounded-lg  md:rounded-none md:rounded-bl-md -translate-y-1/2 md:translate-y-0'
                style={{backgroundColor: job.logoBackground}}>
                <img src={job.logoUrl} alt={`${job.company.name} logo`} width='50%'/>
            </div>
            <div className='flex flex-col md:flex-row px-8 pb-8 md:pb-0 place-items-center md:col-span-5 md:w-full gap-2.5'>
                <div className='flex flex-col place-items-center'>
                    <h1 className='font-bold text-lg md:text-2xl'>{job.company.name}</h1>
                    <p className='text-secondary-content'>{job.company.name.toLowerCase().replace(/ /, '')}.com</p>
                </div>
                <a href={job.website} className='btn btn-accent text-primary mt-6 md:mt-0 md:ml-auto'>Company Site</a>
            </div>
        </header>
    )
}