import { useState } from 'react';
import Image from 'next/image';

import tgicon from '../../resources/img/tg-icon.png';
import insticon from '../../resources/img/inst-icon.png';
import whatsappicon from '../../resources/img/whatsapp-icon.png';
import vkicon from '../../resources/img/vk-icon.png';

const Contacts = ({setModal}) => {
    const [activeMap, setActiveMap] = useState("spb");
    const map = (activeMap === "spb") ? <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A7f14a301e121451c450945c4dc75847b6fcefedacdfdd4f59c4decd6308ce279&amp;source=constructor" width="100%" height="600" frameBorder="0"></iframe>
    : <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Af8548a9ac2b91e766c9ea5c2a693b8e2bd4dfbe80847319c865b9c81e838316a&amp;source=constructor" width="100%" height="600" frameBorder="0"></iframe> ;
    const address = (activeMap === "spb") ? "Санкт-Петербург, Невский проспект, 108В" : "Москва, ул.Шарикоподшипниковская, 22";

    return (
        <div className="contacts" id="contacts">
            <div className="contacts__header">
                <button className={(activeMap === "spb") ? "active" : null} onClick={() => setActiveMap("spb")}>СПб</button>
                <button className={(activeMap === "msk") ? "active" : null} onClick={() => setActiveMap("msk")}>Мск</button>
            </div>
            {map}
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