import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
    name:"form",
    initialState:{
        name: '',
        description: '',
        cost: 0
    },
    reducers:{
        changeName(state,action){
            console.log(state.name = action.payload)
        }
    }
})

export const{ changeName } = formSlice.actions
export const formReducer = formSlice.reducer