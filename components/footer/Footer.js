import Image from 'next/image';
import { Link, animateScroll as scroll } from "react-scroll";

import logo from '../../resources/img/logo.png';
import tgicon from '../../resources/img/tg-icon.png';
import insticon from '../../resources/img/inst-icon.png';
import whatsappicon from '../../resources/img/whatsapp-icon.png';
import vkicon from '../../resources/img/vk-icon.png';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__main">
                <div className="footer__main-part">
                    <div className="footer__main-part-logo">
                        <Image src={logo} alt="logo" />
                    </div>
                    <div className="footer__main-part-socials">
                        <a href="https://telegram.com">
                            <Image src={tgicon} alt="tgicon" />
                        </a>
                        <a href="https://instagram.com">
                            <Image src={insticon} alt="insticon" />
                        </a>
                        <a href="https://whatsapp.com">
                            <Image src={whatsappicon} alt="whatsappicon" />
                        </a>
                        <a href="https://vk.com">
                            <Image src={vkicon} alt="vkicon" />
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
}

export default Footer;