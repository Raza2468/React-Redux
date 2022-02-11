import { combineReducers } from "redux";
import { productReducer } from "./productReducers";


export const reducers = combineReducers(
    {
        allproducts: productReducer
    }
)