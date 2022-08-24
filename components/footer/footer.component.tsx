import Image from 'next/image';
import { Link } from "react-scroll";
import { FC } from 'react';
import Icon from '../icon/icon.component';
import { SOCIAL_LINKS } from '../shared.constant'; 

import logo from '../../resources/img/logo.webp';

const Footer: FC = () => (
    <div className="footer">
        <div className="footer__main">
            <div className="footer__main-part">
                <div className="footer__main-part-logo">
                    <Image src={logo} alt="logo" />
                </div>
                <div className="footer__main-part-socials">
                <a href={SOCIAL_LINKS.TG}>
                        <Icon name="tg" size={25} />
                    </a>
                    <a href={SOCIAL_LINKS.WA}>
                        <Icon name="whatsapp" size={25} />
                    </a>
                    <a href={SOCIAL_LINKS.VK}>
                        <Icon name="vk" size={25} />
                    </a>
                </div>
                <p className="footer__main-part-copyright">(с) 2022 manicute</p>
            </div>
            <div className="footer__main-part">
                <h3>Главная</h3>
                <p>
                    <Link 
                        to="services"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={700}>
                            Прайс
                    </Link>
                </p>
                <p>
                    <Link 
                        to="gallery"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={700}>
                            Галерея
                    </Link>
                </p>
                <p>
                    <Link 
                        to="contacts"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={700}>
                            Контакты
                    </Link>
                </p>
            </div>
            <div className="footer__main-part">
                <h3>Помощь</h3>
                <p>Карта</p>
                <p>Пользовательское соглашение</p>
                <p>Политика конфиденциальности</p>
            </div>
        </div>
    </div>
)
export default Footer;