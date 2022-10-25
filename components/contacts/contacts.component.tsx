import { useState } from "react";
import Icon from "../icon/icon.component";
import { FC } from "react";
import { ADDRESSES, ICONS_SIZE } from "./contacts.constants";
import { SOCIAL_LINKS } from "../shared.constant";

type ContactsProps = {
  setModal: (isOpened: boolean) => void;
};

const Contacts: FC<ContactsProps> = ({ setModal }) => {
  const [activeMap, setActiveMap] = useState<string>("spb");
  let address: string = "",
    mapClasses: string = "";

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
  return (
    <div className="contacts" id="contacts">
      <div className="contacts__header">
        <button
          className={activeMap === "spb" ? "active" : undefined}
          onClick={() => setActiveMap("spb")}
        >
          СПб
        </button>
        <button
          className={activeMap === "msk" ? "active" : undefined}
          onClick={() => setActiveMap("msk")}
        >
          Мск
        </button>
      </div>
      {activeMap === "spb" ? (
        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3A7f14a301e121451c450945c4dc75847b6fcefedacdfdd4f59c4decd6308ce279&amp;source=constructor"
          width="100%"
          height="500"
          frameBorder="0"
          loading="lazy"
        />
      ) : (
        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3Af8548a9ac2b91e766c9ea5c2a693b8e2bd4dfbe80847319c865b9c81e838316a&amp;source=constructor"
          width="100%"
          height="500"
          frameBorder="0"
          loading="lazy"
        />
      )}
      <div className="contacts__mapinfo">
        <h1>_ManiCute_</h1>
        <p>
          {address}
          <br />
          Пн-Вс, с 9:00 до 21:00
        </p>
        <div className="contacts__mapinfo-icons">
          <a href={SOCIAL_LINKS.TG}>
            <Icon name="tg" size={ICONS_SIZE} />
          </a>
          <a href={SOCIAL_LINKS.WA}>
            <Icon name="whatsapp" size={ICONS_SIZE} />
          </a>
          <a href={SOCIAL_LINKS.VK}>
            <Icon name="vk" size={ICONS_SIZE} />
          </a>
        </div>
        <button onClick={() => setModal(true)}>Записаться</button>
      </div>
    </div>
  );
};

export default Contacts;
