import Head from 'next/head';

import Layout from '../components/Layout/Layout';
import PageTitle from '../components/Menu1/PageTitle/PageTitle';
import BreakfastMenu from '../components/Menu1/BreakfastMenu/BreakfastMenu';
import LunchTitle from '../components/Menu1/LunchTitle/LunchTitle';
import LunchMenu from '../components/Menu1/LunchMenu/LunchMenu';
import DinnerTitle from '../components/Menu1/DinnerTitle/DinnerTitle';
import DinnerMenu from '../components/Menu1/DinnerMenu/DinnerMenu';
export default function Menu1() {
  return (
    <>
      <Head>
        <title>IT Restaurant Menu</title>
        {/* <meta name='description' content='Generated by create next app' /> */}
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Layout>
        <PageTitle />
        <BreakfastMenu />
        <LunchTitle />
        <LunchMenu />
        <DinnerTitle />
        <DinnerMenu />
      </Layout>
    </>
  );
}
