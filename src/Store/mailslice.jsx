import { createSlice } from "@reduxjs/toolkit";

export const mailslice = createSlice({
    name : "mail",
    initialState:{
        sendMessageIsOpen:false
    },

    reducers:{
        openSendMessage : (state)=>{
            state.sendMessageIsOpen=true
        },
        closeSendMesage:(state)=>{
            state.sendMessageIsOpen=false
        },
    },
});
export const {openSendMessage, closeSendMesage} = mailslice.actions;
export const selectSendMessageIsOpen = (state)=>state.mail.sendMessageIsOpen;
export default mailslice.reducer;