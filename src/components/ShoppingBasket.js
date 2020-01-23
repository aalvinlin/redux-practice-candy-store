import React from "react";
import {formatPrice} from "../utils/formatPrice";
import BasketItem from "./BasketItem";

const ShoppingBasket = () => {

    return (

        <div className="shoppingBasket">
            <h2>Shopping Basket</h2>

            <form>
                
                <BasketItem />

                <h3>Total cost: {formatPrice(5)}</h3>

            </form>

        </div>
    )

}

export default ShoppingBasket;