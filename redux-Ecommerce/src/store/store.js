import { configureStore } from "@reduxjs/toolkit";
// import { composeWithDevTools } from "redux-devtools-extension";
import productSclice from "./product-slice";

const store = configureStore({
    reducer: {
        product: productSclice.reducer
    }
})

export default store;