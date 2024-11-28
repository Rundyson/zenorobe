import { imgPath } from '@/components/helpers/functions-general'
import React from 'react'


const CardItem = ({item, key}) => {
  return (
    <div className="new-arrival-card px-4" key={key}>
            <div className="mb-4 relative group">
                <p className="absolute left-3 top-3 bg-primary px-4 py-1 rounded-full text-[10px] font-bold z-20 group-hover:opacity-0 transition-opacity">NEW</p>
                <img
                  src={`${imgPath}/${item.img1}`}
                  alt=""
                  className="transition-opacity group-hover:opacity-1"
                />
                <img
                  src={`${imgPath}/${item.img2}`}
                  alt=""
                  className="transition-opacity absolute left-0 top-0 group-hover:opacity-0"
                />
                
            </div>
            <div className="text-center space-y-4">
                <h5>{item.title}</h5>
                <h6>${item.price} AUD</h6>
                <ul className="flex justify-center gap-5">
                    <li className="tooltip" data-tooltip="in stock">29</li>
                    <li className="tooltip" data-tooltip="in stock">30</li>
                    <li className="tooltip" data-tooltip="in stock">31</li>
                    <li className="tooltip" data-tooltip="in stock">32</li>
                    <li className="tooltip" data-tooltip="out of stock">33</li>
                </ul>
            </div>
            </div>
  )
}

export default CardItem
