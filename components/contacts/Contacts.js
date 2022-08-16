import { useState } from 'react';
import Icon from '../icon/Icon';

const Contacts = ({setModal}) => {
    const [activeMap, setActiveMap] = useState("spb");
    let address, mapClasses;

    switch (activeMap) {
        case "msk":
            address = "Москва, ул.Шарикоподшипниковская, 22";
            mapClasses = "contacts__map msk";
            break;
        case "spb":
            address = "Санкт-Петербург, Невский проспект, 108В";
            mapClasses = "contacts__map spb";
            break;
        }
    ;

    return (
        <div className="contacts" id="contacts">
            <div className="contacts__header">
                <button className={(activeMap === "spb") ? "active" : null} onClick={() => setActiveMap("spb")}>СПб</button>
                <button className={(activeMap === "msk") ? "active" : null} onClick={() => setActiveMap("msk")}>Мск</button>
            </div>
            <div className={mapClasses}></div>
            <div className="contacts__mapinfo">
                <h1>_ManiCute_</h1>
                <p>{address}<br/>Пн-Вс, с 9:00 до 21:00</p>
                <div className="contacts__mapinfo-icons">
                    <Icon site="tg" width="35" />
                    <Icon site="inst" width="35" />
                    <Icon site="whatsapp" width="35" />
                    <Icon site="vk" width="35" />
                </div>
                <button onClick={() => setModal(true)}>Записаться</button>
            </div>
        </div>
    )
}

export default Contacts;