import { createSlice } from "@reduxjs/toolkit";
const initialState={
 isOpen:false

}
const modalSlice=createSlice({
name:"modal",
initialState,
reducers:{
     handleModal:(state)=>{
   state.isOpen=!state.isOpen;
     }

}
})
// console.log(modalSlice);
 export default modalSlice.reducer;   
 export const {handleModal}=modalSlice.actions;
