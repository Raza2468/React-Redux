import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from '../Redux/actions/action_Product'

export const ProductListing = () => {

    const Product = useSelector((state) => state.allProducts)
    const dispatch = useDispatch()

    const fetchData = async () => {
        const response = await axios
            .get("https://fakestoreapi.com/products")
            .catch((error) => {
                console.log(error, "Fake Api error")
            });
        dispatch(setProducts(response.data))
    }

    useEffect(() => {
        fetchData()
    }, [])

    console.log(Product, "Fake Api Product response");
    return (
        <div>
            <br />
            <br />
            <br />
            <br />
            <br />

            <h1>ProductListing</h1>
        </div>
    )

}