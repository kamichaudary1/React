import { createSlice } from "@reduxjs/toolkit";

const productSclice = createSlice({
    name: 'product',
    initialState: {
        productitems: [],
        cartProduct: [],
        cartTotalPrice: 0,
        counter: 0,
        totalQty: 0,
        checkoutDetail: [],
    },
    reducers: {
        addProductList: ( state, action)  => {
            state.productitems = action.payload;
        },
        addCart: ( state, action )  => {
            const itemIndex = state.cartProduct.findIndex( (item) => item.id === action.payload.id );
            if( itemIndex >= 0 ){
                state.cartProduct[itemIndex].cartQuantity += 1;
            }else {
                const tempProduct = {...action.payload, cartQuantity: 1};
                state.totalQty++;
                state.cartProduct.push( tempProduct );
            }            
        },
        removeCartItem: ( state, action ) => {
            const itemId = action.payload;
            state.cartProduct = state.cartProduct.filter( (item) => item.id !== itemId );
        },
        decrement( state, action ){
            state.cartProduct.find( (item) => (item.id === action.payload.id) && (item.cartQuantity > 0) && item.cartQuantity-- );
            state.totalQty--;
        },
        increment( state, action ){
            state.cartProduct.find( (item) => item.id === action.payload.id && item.cartQuantity++ );
            state.totalQty++;
        },
        checkOut( state, action ) {
            // console.log(action.payload, ":::: CHECKOUT PAYLOAD");
            
        }

    }

});

export const productActions = productSclice.actions;
export default productSclice;