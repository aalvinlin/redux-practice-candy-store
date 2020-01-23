import React from "react";
import { connect } from 'react-redux';
import {formatPrice} from "../utils/formatPrice";
import BasketItem from "./BasketItem";

const ShoppingBasket = (props) => {

    return (

        <div className="shoppingBasket">
            <h2>Shopping Basket</h2>

            <form>
                {props.shoppingBasket.candyTypes.map(item => {
                
                let candyData = props.candyTypes.filter(candyInArray => candyInArray.id === item.id)[0];
            
                if (!candyData)
                {
                    return (<p>No candy with ID {item.id} found.</p>);
                }

                return (
                    <BasketItem key={item.id} item={item} candyData={candyData} />
                )}
                
                
                )}
                

                <h3>Total cost: {formatPrice(props.shoppingBasket.totalCost)}</h3>

            </form>

        </div>
    )

}

function mapStateToProps(state) {
     return {
        shoppingBasket: state.shoppingBasket,
        candyTypes: state.candyTypes
     }
}

export default connect(mapStateToProps, {} )(ShoppingBasket);
