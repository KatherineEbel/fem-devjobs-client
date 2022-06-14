import {Link} from "react-router-dom";
import {ReactComponent as SunIcon} from "../assets/desktop/icon-sun.svg";
import {Theme, useTheme} from "../hooks/useTheme";
import {ReactComponent as MoonIcon} from "../assets/desktop/icon-moon.svg";

export default function Header() {
    const { theme, toggleTheme } = useTheme()
    return (
        <header className='flex justify-between px-6 py-8 h-[136px] tablet:h-40 bg-no-repeat bg-cover bg-pattern-header md:bg-pattern-header-tablet desktop:bg-pattern-header-desktop'>
            <Link className='text-white text-4xl font-bold' to='/'>devjobs</Link>
            <div className="form-control">
                <label className="label gap-2 cursor-pointer">
                    <SunIcon/>
                    <input data-theme={Theme.DevJobsLight} type="checkbox" className="toggle toggle-primary" checked={theme && theme === Theme.DevJobsDark} onChange={toggleTheme}/>
                    <MoonIcon/>
                </label>
            </div>
        </header>
    )
}