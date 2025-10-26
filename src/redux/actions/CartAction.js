import { ActionTypes } from "../constants/action-types";

export const setCart = (cart) => {
    return {
        type: ActionTypes.ADD_TO_CART,
        payload: cart
    }
}
