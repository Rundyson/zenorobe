import React from 'react'
import SliderItem from './SliderItem';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const BannerSlider = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1500,
    fade: true,
    waitForAnimate: true,
    pauseOnHover: false,
  };
  
  return (
    <section className="banner-slider">
    <Slider {...settings}>
          <SliderItem img="slide-1.jpg" header="GRAPHIC TEES CAPSULE" subheader="NEW DROP"/>
          <SliderItem img="slide-2.jpg" header="RE-STOCK WITH NEW COLORS" subheader="THE QB LOUNGE TEE"/>
          <SliderItem img="slide-3.jpg" header="LIMITED EDITION ONLINE EXCLUSIVE" subheader="STITCHED FOOTBALL TRACKPAINT"/>
    </Slider>
    </section>

  )
}

export default BannerSlider
