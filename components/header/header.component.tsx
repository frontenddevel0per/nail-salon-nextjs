import Image from "next/future/image"
import { Link } from "react-scroll"
import { FC, useEffect } from "react"
import { PowerGlitch } from "powerglitch"
import { WHATSAPP_LINK, TG_LINK, VK_LINK } from "./header.constants"

import logo from '../../resources/img/logo.webp'
import glitchart from '../../resources/img/glitchimg.webp'

type HeaderProps = {
    isSafari: boolean
}

const Header: FC<HeaderProps> = ({isSafari}) =>{
    const buttonsClasses = isSafari ? "header__main-buttons safari" : "header__main-buttons"

    useEffect(() => {
        PowerGlitch.glitch('.glitch', {
            timing: {
                duration: 5000,
                iterations: Infinity
            },
            glitchTimeSpan: {
                start: 0.5,
                end: 0.6
            }
        })
    }), []

    return (
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
                <div className="header__main-logo"><Image src={logo} alt="logo" width="120" height="120" /></div>
                <div className={buttonsClasses} >
                    <a href={WHATSAPP_LINK}>
                        <button><p>Написать в WhatsApp</p></button>
                    </a>
                    <a href={TG_LINK}>
                        <button><p>Подписаться на Telegram</p></button>
                    </a>
                    <a href={VK_LINK}>
                        <button><p>Подписаться на VK</p></button>
                    </a>
                    <Link 
                            to="services"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={700}>
                        <button><p>Услуги</p></button>
                    </Link>
                    <a href="#">
                        <button><p>Акции</p></button>
                    </a>
                    <a href="#">
                        <button><p>Как добраться</p></button>
                    </a>
                </div>
            </div>
            <div className="header__images">
                <div className="header__images-logo"><Image src={logo} alt="logo" width="288" height="288" /></div>
                <div className="header__images-art">
                    <div className="header__images-art-wrapper">
                        <Image src={glitchart} alt="glitchart" className="glitch" />
                    </div>
                </div>
            </div>
        </div>
    )
} 

export default Header