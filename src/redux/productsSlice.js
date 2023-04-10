import { createSlice } from "@reduxjs/toolkit";

let initialState=[]

const productSlice=createSlice({
    name:"products",
    initialState,
reducers:{
    setProducts:(state,action)=>{
 return action.payload
    },

}
})
export const {setProducts}=productSlice.actions
export default productSlice.reducer