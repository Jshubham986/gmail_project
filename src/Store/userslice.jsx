import { createSlice } from "@reduxjs/toolkit";

export const userslice = createSlice({
    name : "user",
    initialState:{
        value:null,
    },

    reducers:{
       signin : (state, action)=>{
            state.value=action.payload
        },
        signout:(state)=>{
            state.value=null
        },
       
    },
});
export const {signin, signout} = userslice.actions;

export const selectUser = (state)=>state.user.value;
export default userslice.reducer;