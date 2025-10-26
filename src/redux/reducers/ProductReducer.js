import { ActionTypes } from "../constants/action-types";

//this is initial state
const initialState = {
    count: 10,
    products: []
}

//this fun will retrieve and assign the array coming via payload
//to products array
export const productReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        //it will modify value of products array to payload
        case ActionTypes.SET_PRODUCT:
            return { ...state, products: payload };
        default:
            return state;
    }
}

export const selectedProductReducer = (state = {}, { type, payload }) => {
    console.log(type);
    switch (type) {
        case ActionTypes.SELECTED_PRODUCT:
            //add payload obj into state obj
            return { ...state, ...payload };
        case ActionTypes.REMOVE_SELECTED_PRODUCT:
            //empty the state
            return {};
        default:
            return state;
    }
}