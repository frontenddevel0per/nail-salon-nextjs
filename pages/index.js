import Head from 'next/head';
import { useState, useEffect } from 'react';

import Preloader from '../components/preloader/Perloader';
import Header from '../components/header/Header';
import Services from '../components/services/Services';
import Gallery from '../components/gallery/Gallery';
import Contacts from '../components/contacts/Contacts';
import Footer from '../components/footer/Footer';
import ModalWindow from '../components/modalWindow/ModalWindow';

export default function Home() {
  const [isModalActive, setModal] = useState(false);
  const [showPreloader, setShowPreloader] = useState(true);
  const [pageLoaded, setPageLoaded] = useState(false);
  const [scrollWidth, setScrollWidth] = useState(null);

  const bodyStyle = isModalActive ? "overflow: hidden;" : "overflow: visible;"
  const calcScrollbar = () => {
    let div = document.createElement('div');

    div.style.overflowY = 'scroll';
    div.style.width = '50px';
    div.style.height = '50px';

    // мы должны вставить элемент в документ, иначе размеры будут равны 0
    document.body.append(div);
    let value = div.offsetWidth - div.clientWidth;
    setScrollWidth(value);
    div.remove();
  }

  useEffect(() => {
    calcScrollbar();
    setPageLoaded(true);
    setTimeout(() => setShowPreloader(false), 2500);
  }, [])

  if (isModalActive) {
    document.querySelector('body').style.overflowY = "hidden";
    document.querySelector('body').style.marginRight = `${scrollWidth}px`;
  } else if (!isModalActive && pageLoaded) {
    document.querySelector('body').style.overflowY = "visible";
    document.querySelector('body').style.marginRight = "0";
  }

  return (
    <>
      <Header/>
      <Services setModal={setModal}/>
      <Gallery/>
      <Contacts setModal={setModal}/>
      <Footer/>
      {isModalActive ? <ModalWindow isModalActive={isModalActive} setModal={setModal}/> : null}
      {showPreloader ? <Preloader/> : null}
    </>
  )
}
