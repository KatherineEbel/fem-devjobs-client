import React from "react";
import {createPortal} from "react-dom";
import {useTheme} from "../hooks/useTheme";

interface FooterProps {
    children: React.ReactNode
}

export default function Footer<T extends FooterProps>({children}: T) {
    const { theme } = useTheme()
    const content = (
        <footer className='bg-base-200 relative left-0 right-0 bottom-0'>
            {children}
        </footer>
    )

    const footer = document.getElementById('footer')
    if (!footer) throw new Error('modal element not found in html')
    footer.dataset.theme = theme
    return createPortal(content, footer);

}
