import {Outlet} from "react-router-dom";
import {useTheme} from "hooks/useTheme";
import Header from "components/Header";

export default function Layout() {
    const { theme } = useTheme()
    return (
        <div className='grid' data-theme={theme}>
            <Header/>
            <main className='grid place-items-center px-2 md:px-10'>
                <Outlet/>
            </main>
        </div>
    )
}