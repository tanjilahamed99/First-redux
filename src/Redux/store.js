import { configureStore } from "@reduxjs/toolkit";
import cartReduce from "./cart/cartReduce";

export const store = configureStore({
    reducer:{
        cart: cartReduce
    }
})