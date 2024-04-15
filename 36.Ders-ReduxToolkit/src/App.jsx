import CourseList from './components/CourseList'
import Navbar from './components/Navbar'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import {calculateTotal} from './control/cartSlice'


function App() {

  const { cartItems } = useSelector((store)=> store.cart)
  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(calculateTotal())
  },[ cartItems ])

  return (
    <div className="App">
      <Navbar/>
      <CourseList/>
    </div>
  )
}

export default App
