import Image from "next/image"
import { Link } from "react-scroll"
import { FC } from "react"

import logo from '../../resources/img/logo.webp'
import headerpreview from '../../resources/img/header-preview.png'

const Header: FC = () => (
    <div className="header">
        <div className="header__main">
            <ul className="header__main-nav">
                <li id="firstli">
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
            <div className="header__main-logo"><Image src={logo} alt="logo" /></div>
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
                <div className="header__images-art-wrapper">
                    <Image src={headerpreview} alt="art" quality="85" />
                </div>
            </div>
        </div>
    </div>
)

export default Header