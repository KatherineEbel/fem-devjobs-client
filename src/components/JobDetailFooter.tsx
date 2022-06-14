import Footer from "./Footer";

type JobDetailFooterProps = {
    title: string
    subtitle: string
    link: string
}

export default function JobDetailFooter({title, subtitle, link}: JobDetailFooterProps) {
    return (
        <Footer>
            <div className='w-full flex items-center justify-between px-10 py-6'>
                <div className='flex-col gap-1 hidden md:flex'>
                    <h2 className='text-xl font-bold'>{title}</h2>
                    <h3 className='text-secondary-content'>{subtitle}</h3>
                </div>
                <a className={`btn btn-primary btn-md w-full md:w-auto`} href={link}>Apply Now</a>
            </div>
        </Footer>
    )
}