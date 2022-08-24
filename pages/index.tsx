import type { NextPage } from 'next'
import Head from 'next/head';
import { useState, useEffect } from 'react';
import { isSafari } from 'react-device-detect';

import Preloader from '../components/preloader/perloader.component';
import Header from '../components/header/header.component';
import Services from '../components/services/services.component';
import Gallery from '../components/gallery/gallery.component';
import Contacts from '../components/contacts/contacts.component';
import Footer from '../components/footer/footer.component';
import ModalWindow from '../components/modal-window/modal-window.component';

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
    if (isSafari) {
      document.querySelector('body')?.classList.add('safari')
    }
  }, [])

  if (isModalActive) {
    document.querySelector('html')!.style.overflowY = "hidden";
    document.querySelector('body')!.style.marginRight = `${scrollWidth}px`;
  } else if (!isModalActive && pageLoaded) {
    document.querySelector('html')!.style.overflowY = "visible";
    document.querySelector('body')!.style.marginRight = "0";
  }

  return (
    <>
      <Head>
        <meta name='keywords' content='маникюр, ногти, маникюр 2022, педикюр, ногти маникюр, маникюр лето, маникюр лето 2022, маникюр дизайн, дизайн ногтей, ногти 2022, ногти дизайн новинки, manicute, _manicute_' />
        <meta name='description' content='Студия неординарных ногтей, услуги бровиста в Москве и Санкт-Петербурге' />
        <meta name="yandex-verification" content="34defb518339da6a" />
      </Head>
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
