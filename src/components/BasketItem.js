import React from "react";
import {formatPrice} from "../utils/formatPrice";

const BasketItem = () => {

    return (

        <div className="basketItem">
            <p>Smarties ($2/lb)</p>
            <p>5 lbs</p>
            <p>{formatPrice(10)}</p>
            <button>X</button>
        </div>
    )

}

export default BasketItem;