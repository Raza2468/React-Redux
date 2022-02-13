import { actionTypes } from "../contants/action_type"

const inatialState = {
    Product: [],
}

// { type, payload } DeIstracaring

export const productReducer = (state = inatialState, { type, payload }) => {

    switch (type) {
        case actionTypes.SET_PRODUCTS:
            return { ...state, Product: payload }

        default:
            return state


    }
}