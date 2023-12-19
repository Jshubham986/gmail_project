import { configureStore } from "@reduxjs/toolkit";
import cardSlice from "./cardSlice";
import mailslice from "./mailslice";
const store = configureStore({
    // reducer : {
    //     cart : cardSlice
    // }
    reducer : {
        mail : mailslice
    }
})
export default store;