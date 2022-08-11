import { useRef } from "react";

const ModalWindow = ({isModalActive, setModal}) => {
    const modal = useRef(null);
    const classes = isModalActive ? "modalWindow active" : "modalWindow";
    // if (isModalActive && typeof document === 'undefined') {
    //     document.querySelector('body').style.overflow = "hidden";
    // } else {
    //     document.querySelector('body').style.overflow = "visible";
    // }

    return (
        <div className={classes} id="modalWindow" onClick={(e) => {
            if (e.target === modal.current ) {
                setModal(false);
            }   
        }} ref={modal}>
            <div className="modalWindow__main">
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