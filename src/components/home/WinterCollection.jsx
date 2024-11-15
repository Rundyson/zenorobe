import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { imgPath } from '../helpers/functions-general';
import CardItem from './CardItem';


const WinterCollection = () => {

    
    const winterCollectionArray = [
        {
            img1:"wc-card-a2.jpg",
            img2:"wc-card-a1.jpg",
            title: "Lorem ipsum dolor sit amet.",
            price: "149.99",
        },
        {
            img1:"wc-card-b2.jpg",
            img2:"wc-card-b1.jpg",
            title: "Lorem ipsum dolor sit amet.",
            price: "149.99",
        },
        {
            img1:"wc-card-c2.jpg",
            img2:"wc-card-c1.jpg",
            title: "Lorem ipsum dolor sit amet.",
            price: "149.99",
        },
        {
            img1:"wc-card-d2.jpg",
            img2:"wc-card-d1.jpg",
            title: "Lorem ipsum dolor sit amet.",
            price: "149.99",
        },
        {
            img1:"wc-card-e2.jpg",
            img2:"wc-card-e1.jpg",
            title: "Lorem ipsum dolor sit amet.",
            price: "149.99",
        },
        {
            img1:"wc-card-f1.jpg",
            img2:"wc-card-f2.jpg",
            title: "Lorem ipsum dolor sit amet.",
            price: "149.99",
        },
        {
            img1:"wc-card-g2.jpg",
            img2:"wc-card-g1.jpg",
            title: "Lorem ipsum dolor sit amet.",
            price: "149.99",
        },
        {
            img1:"wc-card-h2.jpg",
            img2:"wc-card-h1.jpg",
            title: "Lorem ipsum dolor sit amet.",
            price: "149.99",
        },
        {
            img1:"wc-card-i2.jpg",
            img2:"wc-card-i1.jpg",
            title: "Lorem ipsum dolor sit amet.",
            price: "149.99",
        },
        {
            img1:"wc-card-j2.jpg",
            img2:"wc-card-j1.jpg",
            title: "Lorem ipsum dolor sit amet.",
            price: "149.99",
        },
        {
            img1:"wc-card-k2.jpg",
            img2:"wc-card-k1.jpg",
            title: "Lorem ipsum dolor sit amet.",
            price: "149.99",
        },
        {
            img1:"wc-card-l2.jpg",
            img2:"wc-card-l1.jpg",
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
                slidesToScroll: 1,
              }
            }
          ]
        };
  return (
    <section className="new-arrival py-10">
      <div className="container">
        <Slider {...settings}>
            {winterCollectionArray.map((item, key) => (
            <CardItem item={item} key={key}/>
            ))}

        </Slider>
      </div>
    </section>
  )
}

export default WinterCollection
