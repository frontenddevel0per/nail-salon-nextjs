import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import Preloader from '../components/preloader/Perloader';
import '../styles/index.scss';

function MyApp({ Component, pageProps }) {
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   setTimeout(() => setLoading(true), 2000);
  // }, [])

  return (
    <>
      <Head>
        <title>_ManiCute_</title>
      </Head>
      <Component {...pageProps} />
      {/* {loading ? (<React.Fragment><Component {...pageProps} /></React.Fragment>) : (<Preloader/>)} */}
    </>
  )
}

export default MyApp