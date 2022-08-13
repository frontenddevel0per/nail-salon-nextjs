import { useRef } from "react";
import Image from 'next/image';
import closeicon from '../../resources/img/close-icon.png';

const ModalWindow = ({setModal}) => {
    const modal = useRef(null);

    return (
        <div className="modalWindow" id="modalWindow" onClick={(e) => {
            if (e.target === modal.current ) {
                setModal(false);
            }   
        }} ref={modal}>
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