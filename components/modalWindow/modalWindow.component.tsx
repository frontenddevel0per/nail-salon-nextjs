import { useRef, FC } from "react";
import Image from 'next/image';
import closeicon from '../../resources/img/close-icon.png';

type ModalProps = {
    setModal: (isActive: boolean) => void;
}

const ModalWindow: FC<ModalProps> = ({setModal}) => {
    const modal = useRef(null);

    const closeModal = (e: React.SyntheticEvent<EventTarget>): void => {
        if (e.target === modal.current ) {
            setModal(false);
        }   
    }

    return (
        <div className="modalWindow" id="modalWindow" onClick={closeModal} ref={modal}>
            <div className="modalWindow__main">
                 <div className="closeIcon" onClick={() => setModal(false)}>
                    <Image src={closeicon} alt="close-icon" />
                </div>
                <div className="modalWindow__main-wrapper">
                    <h1>Запишись там,<br/>где тебе удобно</h1>
                    <div className="modalWindow__main-wrapper-buttons">
                        <a href="https://telegram.com">
                            <button>
                                <p>Telegram</p>
                            </button>
                        </a>
                        <a href="https://whatsapp.com">
                            <button>
                                <p>Whatsapp</p>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalWindow;