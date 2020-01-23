import React from "react";
import Candy from "./Candy";
import { connect } from 'react-redux';

const CandyStock = (props) => {

    return (

        <div className="candyStock">
            <h2>Candies in Stock</h2>
            <div className="candySelection">
                {
                    props.candyTypes.map(item => <Candy key={item.id} item={item} />)
                }

            </div>
        </div>
    )

}
function mapStateToProps(state) {
    return {       
       candyTypes: state.candyTypes
    }
}

export default connect(mapStateToProps, {})(CandyStock);