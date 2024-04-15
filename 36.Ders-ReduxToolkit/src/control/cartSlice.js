import { createSlice } from "@reduxjs/toolkit";
import courseItem from "../courseItem";

const initialState = {
    cartItems: courseItem,
    quantity: 6,
    total: 0
}

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        clearCart: (state) =>{
            state.cartItems = []
        },
        removeItem: (state,actions) => {
            // console.log(actions.payload)
            const itemId = actions.payload
            state.cartItems = state.cartItems.filter((item) => item.id != itemId)

        },
        increase: (state,actions) => {
           const cartItem = state.cartItems.find((item) => item.id === actions.payload)
           cartItem.quantity += 1
        },
        decrease: (state, actions) => {
          const cartItem = state.cartItems.find((item) => item.id === actions.payload)
          cartItem.quantity -= 1
        },
        calculateTotal: (state) => {
            let newTotal = 0;
            let newQuantity = 0;
            state.cartItems.forEach((item) => {
              newTotal += item.price * item.quantity;
              newQuantity += item.quantity
            })
            state.quantity = newQuantity
            state.total = newTotal
        }
    }
})

// console.log(cartSlice)

export const { clearCart,removeItem,increase,decrease, calculateTotal } = cartSlice.actions

export default cartSlice.reducer