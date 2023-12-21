import { createSlice } from "@reduxjs/toolkit";

export const mailslice = createSlice({
    name : "mail",
    initialState:{
        sendMessageIsOpen:false,
        selectMessage:null,
    },

    reducers:{
        openSendMessage : (state)=>{
            state.sendMessageIsOpen=true
        },
        closeSendMesage:(state)=>{
            state.sendMessageIsOpen=false
        },
        openMessage:(state, action)=>{
            state.selectMessage=action.payload
        },
    },
});
export const {openSendMessage, closeSendMesage, openMessage} = mailslice.actions;
export const selectSendMessageIsOpen = (state)=>state.mail.sendMessageIsOpen;
export const selectMail = (state)=>state.mail.selectMessage;
export default mailslice.reducer;