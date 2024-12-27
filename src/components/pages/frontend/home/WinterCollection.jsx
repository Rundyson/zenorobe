import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { imgPath } from "@/components/helpers/functions-general";
import CardItem from "./CardItem";
import useQueryData from "@/components/custom-hook/useQueryData";

const WinterCollection = () => {
  const {
    isFetching,
    error,
    data: cardWinter,
    status,
  } = useQueryData(
    `/v2/clothes`, //endpoint
    "get", //method
    "clothes" //key
  );
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="new-arrival py-10">
      <div className="container">
        <Slider {...settings}>
          {cardWinter?.count > 0 &&
            cardWinter.data.map((item, key) => (
              <CardItem item={item} key={key} />
            ))}
        </Slider>
      </div>
    </section>
  );
};

export default WinterCollection;
