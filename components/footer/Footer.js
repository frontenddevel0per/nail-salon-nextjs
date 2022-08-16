import Image from 'next/image';
import { Link, animateScroll as scroll } from "react-scroll";
import Icon from '../icon/Icon';

import logo from '../../resources/img/logo.png';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__main">
                <div className="footer__main-part">
                    <div className="footer__main-part-logo">
                        <Image src={logo} alt="logo" />
                    </div>
                    <div className="footer__main-part-socials">
                        <Icon site="tg" width="25" height="25" />
                        <Icon site="inst" width="25" height="25" />
                        <Icon site="whatsapp" width="25" height="25" />
                        <Icon site="vk" width="25" height="25" />
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