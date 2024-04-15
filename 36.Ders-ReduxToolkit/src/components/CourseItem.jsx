import React from 'react'
import { BsChevronUp,BsChevronDown  } from "react-icons/bs";
import { useDispatch } from 'react-redux';
import { removeItem, increase, decrease} from "../control/cartSlice";



const CourseItem = ({id, title, price, img, quantity}) => {
const dispatch = useDispatch();

  return (
    <div className='cartItem'>
        <img src={img} />
        <div className='cart-info'>
            <h4 className='cartContent'>{title}</h4>
            <h4 className='cartContent'>{price}TL</h4>
            <div className='cartContent'>
                <button className='cartQuantityBtn' onClick={() => {dispatch(increase(id))}} >
                    <BsChevronUp/>
                </button>
                <p className='cartQuantity'>{quantity}</p>
                <button className='cartQuantityBtn' onClick={() => {dispatch(decrease(id))}} >
                    <BsChevronDown/>
                </button>
            </div>
            <button className='cartContentBtn' onClick={() => (dispatch(removeItem(id)))} >Sil</button>
        </div>
    </div>
  )
}

export default CourseItem