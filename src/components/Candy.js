import React from "react";
import {formatPrice} from "../utils/formatPrice";

const Candy = () => {

    return (

        <div className="candy">
            <img src="https://cdn.shopify.com/s/files/1/0004/8132/9204/products/smarties_2_large.jpg?v=1550328122" />
            <h3>Smarties ({formatPrice(2)}/lb)</h3>
            <p>100 lbs in stock</p>
            <form name="candyForm">
                <div className="inputDiv">
                    <input placeholder="pounds" />
                    <button>Add</button>
                </div>
            </form>

        </div>
    )

}

export default Candy;