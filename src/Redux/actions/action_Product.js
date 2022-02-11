import { actionTypes } from "../contants/action_type";

export const setProducts = (products) => {
    return {
        type: actionTypes.SET_PRODUCTS,
        payload: products
    }
}

export const selectProduct = (product) => {
    return {
        type: actionTypes.SELECTED_PRODUCT,
        payload: product
    }
}

export const removeProduct = (product) => {
    return {
        type: actionTypes.REMOVE_PRODUCT,
        payload: product
    }

}