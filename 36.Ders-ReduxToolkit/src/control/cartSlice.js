import { createSlice } from "@reduxjs/toolkit";
import courseItem from "../courseItem";

const initialState = {
    cartItems: courseItem,
    quantity: 1,
    total: 0
}

const cartSlice = createSlice({
    name:'cart',
    initialState
})

// console.log(cartSlice)

export default cartSlice.reducer