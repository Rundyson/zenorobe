import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import CardItem from './CardItem';


const NewArrival = () => {

    
    const newArrivalArray = [
        {
            img1:"na-card-a2.jpg",
            img2:"na-card-a1.jpg",
            title: "Lorem ipsum dolor sit amet.",
            price: "149.99",
        },
        {
            img1:"na-card-b2.jpg",
            img2:"na-card-b1.jpg",
            title: "Lorem ipsum dolor sit amet.",
            price: "149.99",
        },
        {
            img1:"na-card-c2.jpg",
            img2:"na-card-c1.jpg",
            title: "Lorem ipsum dolor sit amet.",
            price: "149.99",
        },
        {
            img1:"na-card-d2.jpg",
            img2:"na-card-d1.jpg",
            title: "Lorem ipsum dolor sit amet.",
            price: "149.99",
        },
        {
            img1:"na-card-e2.jpg",
            img2:"na-card-e1.jpg",
            title: "Lorem ipsum dolor sit amet.",
            price: "149.99",
        },
        {
            img1:"na-card-f2.jpg",
            img2:"na-card-f1.jpg",
            title: "Lorem ipsum dolor sit amet.",
            price: "149.99",
        },
        {
            img1:"na-card-g2.jpg",
            img2:"na-card-g1.jpg",
            title: "Lorem ipsum dolor sit amet.",
            price: "149.99",
        },
        {
            img1:"na-card-h2.jpg",
            img2:"na-card-h1.jpg",
            title: "Lorem ipsum dolor sit amet.",
            price: "149.99",
        },
        {
            img1:"na-card-i2.jpg",
            img2:"na-card-i1.jpg",
            title: "Lorem ipsum dolor sit amet.",
            price: "149.99",
        },
        {
            img1:"na-card-j2.jpg",
            img2:"na-card-j1.jpg",
            title: "Lorem ipsum dolor sit amet.",
            price: "149.99",
        },
        {
            img1:"na-card-k2.jpg",
            img2:"na-card-k1.jpg",
            title: "Lorem ipsum dolor sit amet.",
            price: "149.99",
        },
        {
            img1:"na-card-l2.jpg",
            img2:"na-card-l1.jpg",
            title: "Lorem ipsum dolor sit amet.",
            price: "149.99",
        },

    ]
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


  return (
    <section className="new-arrival py-10">
      <div className="container">
        <Slider {...settings}>
            {newArrivalArray.map((item, key) => (
            <CardItem item={item} key={key}/>
            ))}

        </Slider>
      </div>
    </section>
  )
}

export default NewArrival
