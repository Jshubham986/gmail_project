import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const product = action.payload;
            const existingProduct = state.find((item) => item.id === product.id);
            if (existingProduct) {
                existingProduct.quantity++;
                console.log(existingProduct);
            } else {
                state.push(product);
            }
        },
        removeSingle: (state, action) => {
            const { id } = action.payload;
            const existingProduct = state.find((item) => item.id === id);
            if (existingProduct) {
                if (existingProduct.quantity > 0) {
                    existingProduct.quantity--;
                }
            }
        },

        removeFromcart: (state, action) => {
            state.splice(action.payload, 1);
        }

    }
})
export const { addToCart, removeFromcart, removeSingle } = cartSlice.actions;
export default cartSlice.reducer;