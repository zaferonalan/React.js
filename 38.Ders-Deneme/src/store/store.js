import { configureStore } from "@reduxjs/toolkit";
import { formReducer } from "./control/formSlice";

export const store = configureStore({
    reducer:{
        form:formReducer,
    }
})