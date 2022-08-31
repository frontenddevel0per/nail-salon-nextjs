import type { NextPage } from 'next'
import Head from 'next/head'
import Agreement from '../components/agreement/agreement.component'

const AgreementPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Пользовательское соглашение</title>
      </Head>
      <Agreement/>
    </>
  )
}

export default AgreementPage
