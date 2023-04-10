import { createSlice } from "@reduxjs/toolkit";

let initialState=""

const searchSlice=createSlice({
    name:"search",
    initialState,
reducers:{
    setSearch:(state,action)=>{
 return action.payload
    },

}
})
export const {setSearch}=searchSlice.actions
export default searchSlice.reducer