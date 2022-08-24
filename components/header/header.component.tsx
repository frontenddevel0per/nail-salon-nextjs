import Image from "next/future/image"
import { Link } from "react-scroll"
import { FC, useEffect } from "react"
import { PowerGlitch } from "powerglitch"
import { SOCIAL_LINKS, SCROLL_DURATION } from "../shared.constant"
import { LOGO_SIZE } from "./header.constant"

import logo from '../../resources/img/logo.webp'
import glitchart from '../../resources/img/glitchimg.webp'

const Header: FC = () =>{
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
                            duration={SCROLL_DURATION}>
                                Услуги
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="gallery"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={SCROLL_DURATION}>
                                Галерея
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="contacts"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={SCROLL_DURATION}>
                                Контакты
                        </Link>
                    </li>
                </ul>
                <h1>_MANICUTE_</h1>
                <h3>Студия неординарных ногтей,<br/>услуги бровиста в Москве и<br/>Санкт-Петербурге</h3>
                <div className="header__main-logo"><Image src={logo} alt="logo" width={LOGO_SIZE.SMALL} height={LOGO_SIZE.SMALL} /></div>
                <div className="header__main-buttons" >
                    <a href={SOCIAL_LINKS.WA}>
                        <button><p>Написать в WhatsApp</p></button>
                    </a>
                    <a href={SOCIAL_LINKS.TG}>
                        <button><p>Подписаться на Telegram</p></button>
                    </a>
                    <a href={SOCIAL_LINKS.VK}>
                        <button><p>Подписаться на VK</p></button>
                    </a>
                    <Link 
                            to="services"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={SCROLL_DURATION}>
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
                <div className="header__images-logo"><Image src={logo} alt="logo" width={LOGO_SIZE.BIG} height={LOGO_SIZE.BIG} /></div>
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