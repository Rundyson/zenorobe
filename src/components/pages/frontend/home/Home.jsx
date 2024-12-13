import React from 'react'
import BannerSlider from './BannerSlider';
import NewArrival from './NewArrival';
import FullPageLink from './FullPageLink';
import WinterCollection from './WinterCollection';
import Header from './partials/Header';
import Footer from './partials/Footer';
import useQueryData from '@/components/custom-hook/useQueryData';


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
