import React from 'react'
import Header from '../partials/header';
import Footer from '../partials/footer';
import BannerSlider from './BannerSlider';
import NewArrival from './NewArrival';
import FullPageLink from './FullPageLink';
import WinterCollection from './WinterCollection';


const Home = () => {
  return (
    <>
        <Header/>
        <BannerSlider/>
        <NewArrival/>
        <FullPageLink img="fullPage.jpg" header="Lorem, ipsum dolor." subheader="Lorem ipsum dolor sit amet."/>
        <WinterCollection/>
        <Footer/>
    </>

  );
};

export default Home
