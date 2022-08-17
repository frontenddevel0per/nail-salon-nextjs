import type { NextPage } from 'next'
import { useState, useEffect } from 'react';

import Preloader from '../components/preloader/Perloader';
import Header from '../components/header/Header';
import Services from '../components/services/Services';
import Gallery from '../components/gallery/Gallery';
import Contacts from '../components/contacts/Contacts';
import Footer from '../components/footer/Footer';
import ModalWindow from '../components/modalWindow/ModalWindow';

const Home: NextPage = () => {
  
  const [isModalActive, setModal] = useState<boolean>(false);
  const [showPreloader, setShowPreloader] = useState<boolean>(true);
  const [pageLoaded, setPageLoaded] = useState<boolean>(false);
  const [scrollWidth, setScrollWidth] = useState<number | null>(null);

  const calcScrollbar = () : void => {
    let div = document.createElement('div');

    div.style.overflowY = 'scroll';
    div.style.width = '50px';
    div.style.height = '50px';

    // мы должны вставить элемент в документ, иначе размеры будут равны 0
    document.body.append(div);
    let value: number = div.offsetWidth - div.clientWidth;
    setScrollWidth(value);
    div.remove();
  }

  useEffect(() => {
    calcScrollbar();
    setPageLoaded(true);
    setTimeout(() => setShowPreloader(false), 2500);
  }, [])

  if (isModalActive) {
    document.querySelector('body')!.style.overflowY = "hidden";
    document.querySelector('body')!.style.marginRight = `${scrollWidth}px`;
  } else if (!isModalActive && pageLoaded) {
    document.querySelector('body')!.style.overflowY = "visible";
    document.querySelector('body')!.style.marginRight = "0";
  }

  return (
    <>
      <Header/>
      <Services setModal={setModal}/>
      <Gallery/>
      <Contacts setModal={setModal}/>
      <Footer/>
      {isModalActive ? <ModalWindow setModal={setModal}/> : null}
      {showPreloader ? <Preloader/> : null}
    </>
  )
}

export default Home
