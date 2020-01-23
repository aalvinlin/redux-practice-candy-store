import React from "react";
import {formatPrice} from "../utils/formatPrice";
import { connect } from 'react-redux';
import { removeFromBasket } from '../actions/customerActions';



const BasketItem = ({item, candyData, removeFromBasket}) => {

    let priceOfItem = candyData.costPerLb * item.pounds;
    
    return (

        <div className="basketItem">
            <p>{item.name} ({formatPrice(candyData.costPerLb)}/lb)</p>
            <p>{item.pounds} lbs</p>
            <p>{formatPrice(priceOfItem)}</p>
            <button onClick={ (event) => {

                console.log("Remove button clicked!", item);

                event.preventDefault();
                removeFromBasket(item);

            }}>X</button>
        </div>
    )

}

export default connect(null, { removeFromBasket })(BasketItem);