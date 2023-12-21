import { configureStore } from "@reduxjs/toolkit";
import cardSlice from "./cardSlice";
import mailslice from "./mailslice";
import userslice from "./userslice";

const store = configureStore({
    // reducer : {
    //     cart : cardSlice
    // }
    reducer : {
        mail : mailslice,
        user : userslice
    }
})
export default store;