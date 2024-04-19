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
            state.name = action.payload
        },
        descriptionChange(state,action){
            state.description = action.payload
        },
        costChange(state,action){
            state.cost = action.payload
        }
    }
})

export const{ changeName, descriptionChange } = formSlice.actions
export const formReducer = formSlice.reducer