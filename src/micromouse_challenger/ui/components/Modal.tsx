import { useEffect, useState } from "react";
import PrimaryButton from "./PrimaryButton";


interface ModalProps {
    open: boolean
    title: string
    onClose: () => void
    onAccept: () => void
    children: JSX.Element
}

export default function Modal(props: ModalProps) {
    
    const [open, setOpen] = useState(props.open)

    useEffect(() => {
        setOpen(props.open)
    }, [props.open])

    const handleCloseModal = () => {
        setOpen(false)
        props.onClose()
    }

    const handleAcceptModal = () => {
        setOpen(false)
        props.onAccept()
    }

    return (
        <>
            {open && <div className="flex items-center justify-center bg-opacity-50 bg-indigo-900 fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div className="relative w-full max-w-2xl max-h-full">
                    <div className="relative bg-slate-800 rounded-lg shadow">
                        <div className="flex items-start justify-between p-4 border-b rounded-t border-gray-600">
                            <h3 className="text-xl font-semibold text-orange-300">
                                {props.title}
                            </h3>
                            <button onClick={handleCloseModal} type="button" className="text-gray-400 bg-transparent hover:bg-gray-900 hover:text-white rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center" data-modal-hide="defaultModal">
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        <div className="p-6 space-y-6">
                          {props.children}
                        </div>
                        <div className="flex items-center justify-center p-6 space-x-2 border-t border-gray-200 rounded-b border-gray-600">
                            <PrimaryButton text="Aceptar" onClick={handleAcceptModal} />
                            {/* <button data-modal-hide="defaultModal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Decline</button> */}
                        </div>
                    </div>
                </div>
            </div>}
            {/* <PrimaryButton text="MODAL" onClick={() => setOpen(true)} /> */}
        </>
    )
}
