import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import CardItem from './CardItem';
import { Link } from 'react-router-dom';
import { newArrivalArray } from './New-arrival-data';
import useQueryData from '@/components/custom-hook/useQueryData';


const NewArrival = () => {

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
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 520,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        };
        const {
          isFetching,
          error,
          data: card,
          status,
        } = useQueryData(
          `/v2/clothes`, //endpoint
          "get", //method
          "clothes" //key
        );


  return (

    <section className="new-arrival py-10">
      <div className="container">
        <Slider {...settings}>
        {card?.count > 0 &&
          card.data.map((item, key) => (
            <CardItem item={item} key={key}/>
            ))}

        </Slider>
      </div>
    </section>
  
  )
}

export default NewArrival
