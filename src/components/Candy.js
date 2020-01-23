import React, { useState } from "react";
import {formatPrice} from "../utils/formatPrice";

import { connect } from 'react-redux';
import { addToBasket } from '../actions/customerActions';


const Candy = (props) => {

    const [pounds, setPounds] = useState(0);

    const handleChange = (e) => {
        setPounds(e.target.value);
    }
    
    return (

        <div className="candy">
            <img src={props.item.img} />
            <h3>{props.item.name} ({formatPrice(props.item.costPerLb)}/lb)</h3>
            <p>{props.item.stock} lbs in stock</p>
            <form name="candyForm">
                <div className="inputDiv">
                    <input type='number' name="userPounds" placeholder="pounds" onChange={handleChange} value={pounds} />
                    <button onClick={ (event) => {

                        console.log("Add button clicked!", props.item);

                        event.preventDefault();
                        props.addToBasket({
                            ...props.item,
                            pounds: pounds
                        });

                        }}>Add</button>
                </div>
            </form>

        </div>
    )

}

export default connect(null, {addToBasket})(Candy);