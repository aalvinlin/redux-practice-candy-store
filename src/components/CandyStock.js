import React from "react";
import Candy from "./Candy";

const CandyStock = () => {

    return (

        <div className="candyStock">
            <h2>Candies in Stock</h2>
            <div className="candySelection">
                <Candy />
            </div>
        </div>
    )

}

export default CandyStock;