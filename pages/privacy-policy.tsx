import type { NextPage } from 'next'
import Head from 'next/head'
import PrivacyPolicy from '../components/privacy-policy/privacy-policy.component'

const PrivacyPolicyPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Политика конфиденциальности</title>
      </Head>
      <PrivacyPolicy/>
    </>
  )
}

export default PrivacyPolicyPage
