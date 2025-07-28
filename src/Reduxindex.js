import { createSlice } from "@reduxjs/toolkit";

const reduxstoredprovider=createSlice({
    name:"moviez",
    initialState:{
        items:[]
    },
    reducers:{
        setAllmovies:(state,action)=>{
          state.items=action.payload
        },
        setHerosectionslide:(state)=>{
          state.items.slice(10,15)
        },
    }
})
export const{setAllmovies,setHerosectionslide}=reduxstoredprovider.actions
export default reduxstoredprovider.reducer