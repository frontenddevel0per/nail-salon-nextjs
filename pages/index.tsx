import type { NextPage } from 'next'
import { useState, useEffect } from 'react';

import Preloader from '../components/preloader/perloader.component';
import Header from '../components/header/header.component';
import Services from '../components/services/services.component';
import Gallery from '../components/gallery/gallery.component';
import Contacts from '../components/contacts/contacts.component';
import Footer from '../components/footer/footer.component';
import ModalWindow from '../components/modalWindow/modalWindow.component';

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
    if (/constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification))) {
      document.querySelector('body')?.classList.add('safari')
    }
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
