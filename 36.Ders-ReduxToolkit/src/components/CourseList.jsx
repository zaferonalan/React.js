import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import CourseItem from './CourseItem'
import { clearCart } from "../control/cartSlice";

const CourseList = () => {
    const {cartItems, quantity, total} = useSelector((store)=> store.cart)
    const dispatch = useDispatch()

  return (
    <>
        {quantity < 1 ? (
            <section className='cart'>
                <header>
                    <h2>Sepetim</h2>
                    <p>Bomboş</p>
                </header>
            </section>
        ): (
            <section className='cart' >
                <h2>Sepetim</h2>
                <div>
                    {cartItems.map((item)=> {
                        return <CourseItem key={item.id} {...item}/>
                    } )}
                </div>
                <footer className='footer'>
                    <hr />
                    <div className='total-txt'>
                        <h4>Toplam Tutar: <span>{total} TL</span></h4>
                    </div>
                    <button className='cartClearButton' onClick={ () => dispatch(clearCart()) } >Temizle</button>
                </footer>
            </section>
        )}
    </>
  )
}

export default CourseList