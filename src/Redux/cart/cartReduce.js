import { createSlice } from "@reduxjs/toolkit";


const cartReduce = createSlice({
    name: 'Cart',
    initialState: [],
    reducers: {
        addItems: (state, action) => {
            state.push(action)
        }
    }
})

export const  {addItems} = cartReduce.actions

export default cartReduce.reducer