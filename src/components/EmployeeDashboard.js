import React, { useState } from "react";
import { connect } from 'react-redux';

const EmployeeDashboard = props => {
    const [selectedCandy, setSelectedCandy] = useState('');

    const handleDropDownChange = () => {
        setSelectedCandy('haaaaaaaalp');
    };
    
    const handlechange = (event) => {
        return {
            ...nameofstateobj,
            [event.target.name]: event.target.value
        }
    }

    return (

        <div className="employeeDashboard">
            <h2>Employee Dashboard</h2>
            
            <form>
                <h3>Add to existing stock</h3>
                <select name="candyAddStock" onChange={handleDropDownChange}>
                    {props.candyTypes.map(candy => (<option value="candy.name">{candy.name}</option>))}
                </select>
                <br />
                <input placeholder="pounds to add" />
                <br />
                <button>Add pounds</button>
            </form>

            <form>
                <h3>Change unit price</h3>
                <select name="candyAddStock" onChange={handleDropDownChange}>
                    {props.candyTypes.map(candy => (<option value="candy.name">{candy.name}</option>))}
                </select>
                <br />
                <input placeholder="new cost per pound" />
                <br />
                <button>Change unit price</button>

                <h3>Remove candy type from store</h3>
                <input placeholder="candy name" />
                <br />
                <button>Remove candy type</button>
            </form>

            <form>
                <h3>Add new candy type to store</h3>
                <input placeholder="candy name" />
                <br />
                <input placeholder="image url" />
                <br />
                <input placeholder="cost per pound" />
                <br />
                <button>Add new candy</button>
            </form>
        </div>
    )

}

function mapStateToProps(state) {
    return {
        candyTypes: state.candyTypes
    };
}

export default connect(mapStateToProps, {})(EmployeeDashboard);