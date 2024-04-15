import React from 'react'
import { BsChevronUp,BsChevronDown  } from "react-icons/bs";

const CourseItem = ({id, title, price, img, quantity}) => {
  return (
    <div>
        <img src={img} />
        <div>
            <h4>{title}</h4>
            <h4>{price}TL</h4>
            <div>
                <button>
                    <BsChevronUp/>
                </button>
                <p>{quantity}</p>
                <button>
                    <BsChevronDown/>
                </button>
            </div>
        </div>
        
        <button>Sil</button>
    </div>
  )
}

export default CourseItem