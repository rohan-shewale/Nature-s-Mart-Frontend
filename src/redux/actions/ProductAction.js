import { ActionTypes } from "../constants/action-types"

//this fun which will create action obj to get list of products
export const setProducts = (products) => {
    return {
        type: ActionTypes.SET_PRODUCT,
        payload: products
    }
}

//this fun which will create action obj to get details of selected product
export const selectedProduct = (product) => {
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: product
    }
}

//this fun which will create action obj to remove product
export const removeSelectedProduct = (product) => {
    return {
        type: ActionTypes.REMOVE_SELECTED_PRODUCT,
        payload: product
    }
}

