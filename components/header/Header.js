import { Link, animateScroll as scroll } from "react-scroll";
import Image from 'next/image';

import logo from '../../resources/img/logo.png';
import art from '../../resources/img/art.png';
import headerpreview from '../../resources/img/header-preview.png';

const Header = () => {
    return (
        <div className="header">
            <div className="header__main">
                <ul className="header__main-nav">
                    <li>
                        <Link 
                            to="services"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={700}>
                                Услуги
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="gallery"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={700}>
                                Галерея
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="contacts"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={700}>
                                Контакты
                        </Link>
                    </li>
                </ul>
                <h1>_MANICUTE_</h1>
                <h3>Студия неординарных ногтей,<br/>услуги бровиста в Москве и<br/>Санкт-Петербурге</h3>
                <div className="header__main-buttons">
                    <a href="#">
                        <button><p>Написать в WhatsApp</p></button>
                    </a>
                    <a href="#">
                        <button><p>Подписаться на Telegram</p></button>
                    </a>
                    <a href="#">
                        <button><p>Подписаться на VK</p></button>
                    </a>
                    <a href="#">
                        <button><p>Услуги</p></button>
                    </a>
                    <a href="#">
                        <button><p>Акции</p></button>
                    </a>
                    <a href="#">
                        <button><p>Как добраться</p></button>
                    </a>
                </div>
            </div>
            <div className="header__images">
                <div className="header__images-logo"><Image src={logo} alt="logo" /></div>
                <div className="header__images-art">
                    <Image src={headerpreview} alt="art" quality="85" />
                </div>
            </div>
        </div>
    )
}

export default Header;