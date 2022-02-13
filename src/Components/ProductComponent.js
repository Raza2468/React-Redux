import React from "react";
import { useSelector } from "react-redux";


export const ProductComponent = () => {

    const Products = useSelector((state) => state)
    // const { id, Name } = Products[0]
   
    // console.log(id, Name, "sa");
   
    return (

        <div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <h1>ProductComponent</h1>
        </div>
    )

}