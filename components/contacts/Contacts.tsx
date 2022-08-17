import { useState } from 'react';
import Icon from '../icon/Icon';
import FC from 'react';

type ContactsProps = {
    setModal: (isOpened: boolean) => void;
}

const Contacts = ({setModal}: ContactsProps) => {
    const [activeMap, setActiveMap] = useState<string>("spb");
    let address: string = "", mapClasses: string = "";

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
                <button className={(activeMap === "spb") ? "active" : undefined} onClick={() => setActiveMap("spb")}>СПб</button>
                <button className={(activeMap === "msk") ? "active" : undefined} onClick={() => setActiveMap("msk")}>Мск</button>
            </div>
            <div className={mapClasses}></div>
            <div className="contacts__mapinfo">
                <h1>_ManiCute_</h1>
                <p>{address}<br/>Пн-Вс, с 9:00 до 21:00</p>
                <div className="contacts__mapinfo-icons">
                    <Icon name="tg" size={35} />
                    <Icon name="inst" size={35} />
                    <Icon name="whatsapp" size={35} />
                    <Icon name="vk" size={35} />
                </div>
                <button onClick={() => setModal(true)}>Записаться</button>
            </div>
        </div>
    )
}

export default Contacts;