import { useState } from 'react';
import Icon from '../icon/icon.component';
import { FC } from 'react';
import { ADDRESSES } from './contacts.constants';
import { SOCIAL_LINKS } from '../shared.constant'

type ContactsProps = {
    setModal: (isOpened: boolean) => void;
}

const Contacts: FC<ContactsProps> = ({setModal}) => {
    const [activeMap, setActiveMap] = useState<string>("spb");
    let address: string = "", mapClasses: string = "";

    switch (activeMap) {
        case "msk":
            address = ADDRESSES.MSK;
            mapClasses = "contacts__map msk";
            break;
        case "spb":
            address = ADDRESSES.SPB;
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
                    <a href={SOCIAL_LINKS.TG}>
                        <Icon name="tg" size={35} />
                    </a>
                    <a href={SOCIAL_LINKS.WA}>
                        <Icon name="whatsapp" size={35} />
                    </a>
                    <a href={SOCIAL_LINKS.VK}>
                        <Icon name="vk" size={35} />
                    </a>
                </div>
                <button onClick={() => setModal(true)}>Записаться</button>
            </div>
        </div>
    )
}

export default Contacts;