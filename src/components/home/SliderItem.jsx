import React from 'react'
import { imgPath } from '../helpers/functions-general'

const SliderItem = ({img, header, subheader}) => {
  return (
    <div className="slider-item relative">
      <img src={`${imgPath}/${img}`} alt="" className="h-screen w-full object-cover"/>
      <div className="absolute md:left-20 bottom-10 left-10 text-white">
        <h6>{subheader}</h6>
        <h2>{header}</h2>
      </div>
    </div>
  );
};

export default SliderItem
