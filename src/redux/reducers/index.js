import { combineReducers } from "redux";
import { productReducer, selectedProductReducer } from "./ProductReducer";
import {cartReducer}  from "./CartReducer";

const reducers = combineReducers({
    allProducts:productReducer,
    //product will go as initial state to selectedProductReducer and it will modify that product only
    product:selectedProductReducer,

    allCartItems: cartReducer
})

export default reducers;