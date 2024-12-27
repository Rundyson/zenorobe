import React from "react";
import SliderItem from "./SliderItem";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useQueryData from "@/components/custom-hook/useQueryData";

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
  const {
    isFetching,
    error,
    data: banner,
    status,
  } = useQueryData(
    `/v2/banner`, //endpoint
    "get", //method
    "banner" //key
  );

  return (
    <section className="banner-slider">
      <Slider {...settings}>
        {banner?.count > 0 &&
          banner.data.map((item, key) => (
            <SliderItem
              img={item.banner_image}
              header={item.banner_title}
              subheader={item.banner_subtitle}
              key={key}
            />
          ))}
      </Slider>
    </section>
  );
};

export default BannerSlider;
