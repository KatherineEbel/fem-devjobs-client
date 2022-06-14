import React from "react";
import {createPortal} from "react-dom";
import {useTheme} from "../hooks/useTheme";

interface ModalProps {
    children: React.ReactNode
    modalId: string
}

export default function Modal({children, modalId }: ModalProps) {
    const { theme} = useTheme()
    const content = (
        <>
            <input type='checkbox' id={modalId} className='modal-toggle'/>
            <label htmlFor={modalId} className="modal cursor-pointer">
                <label className="modal-box w-[327px]" htmlFor="">
                    {children}
                </label>
            </label>
        </>
    )

    const modal = document.getElementById('modal')
    if (!modal) throw new Error('modal element not found in html')
    modal.dataset.theme = theme
    return createPortal(content, modal);

}
