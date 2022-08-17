import Head from 'next/head'
import '../styles/index.scss'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>_ManiCute_</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
