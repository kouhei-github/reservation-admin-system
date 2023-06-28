import { useState } from 'react'

type ModalProps = {
    buttonLabel: string
}

const Modal = ({ buttonLabel }: ModalProps) => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleModal = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <button onClick={toggleModal} className={""}>
                {buttonLabel}
            </button>
            {isOpen && (
                <div className={""}>
                    <div className={""}>
                        <p>This is a modal window.</p>
                        <button onClick={toggleModal}>Close</button>
                    </div>
                </div>
            )}
        </>
    )
}

export default Modal
