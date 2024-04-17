import { createSlice } from "@reduxjs/toolkit";

const courseSlice = createSlice({
    name:"courseSearch",
    initialState:{
        searchTerm:'',
        data:[]
    },
    reducers:{

    }
})

export const courseReducer = courseSlice.reducer