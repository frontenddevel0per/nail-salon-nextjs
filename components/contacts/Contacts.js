import { useState } from 'react';
import Image from 'next/image';

import tgicon from '../../resources/img/tg-icon.png';
import insticon from '../../resources/img/inst-icon.png';
import whatsappicon from '../../resources/img/whatsapp-icon.png';
import vkicon from '../../resources/img/vk-icon.png';

const Contacts = ({setModal}) => {
    const [activeMap, setActiveMap] = useState("spb");
    const address = (activeMap === "spb") ? "Санкт-Петербург, Невский проспект, 108В" : "Москва, ул.Шарикоподшипниковская, 22";

    return (
        <div className="contacts" id="contacts">
            <div className="contacts__header">
                <button className={(activeMap === "spb") ? "active" : null} onClick={() => setActiveMap("spb")}>СПб</button>
                <button className={(activeMap === "msk") ? "active" : null} onClick={() => setActiveMap("msk")}>Мск</button>
            </div>
            <div className={(activeMap === "spb") ? "contacts__map spb" : "contacts__map msk"}></div>
            <div className="contacts__mapinfo">
                <h1>_ManiCute_</h1>
                <p>{address}<br/>Пн-Вс, с 9:00 до 21:00</p>
                <div className="contacts__mapinfo-icons">
                    <a href="https://telegram.com">
                        <Image src={tgicon} alt="tg-icon"/>
                    </a>
                    <a href="https://instagram.com">
                        <Image src={insticon} alt="inst-icon"/>
                    </a>
                    <a href="https://whatsapp.com">
                        <Image src={whatsappicon} alt="whatsapp-icon"/>
                    </a>
                    <a href="https://vk.com">
                        <Image src={vkicon} alt="vk-icon"/>
                    </a>
                </div>
                <button onClick={() => setModal(true)}>Записаться</button>
            </div>
        </div>
    )
}

export default Contacts;