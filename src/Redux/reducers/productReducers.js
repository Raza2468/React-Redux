import { actionTypes } from "../contants/action_type"

const inatialState = {
    Product :[
        {
            id: 1,
            Name: "Raza",
            Catagari: "Good",
        },
    ],
}

// { type, payload } DeIstracaring

export const productReducer = (state=inatialState, { type, payload }) => {

    switch (type) {
        case actionTypes.SET_PRODUCTS:
            return state

        default:
            return state


    }
}