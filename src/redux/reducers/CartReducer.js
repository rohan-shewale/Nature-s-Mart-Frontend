import { ActionTypes } from "../constants/action-types";

const initialState = {
    count : 0,
    carts :[]
}

export const cartReducer = (state = initialState, {type, payload}) => {

    switch (type) {
        case ActionTypes.SET_CART:
            return {...state, carts : payload}
    
        default:
            return state;
    }
}