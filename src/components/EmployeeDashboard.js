import React from "react";

const EmployeeDashboard = () => {

    return (

        <div className="employeeDashboard">
            <h2>Employee Dashboard</h2>

            <form>

                <h3>Add to existing stock</h3>
                <input placeholder="candy name" />
                <br />
                <input placeholder="pounds to add" />
                <br />
                <button>Add pounds</button>

                <h3>Change unit price</h3>
                <input placeholder="candy name" />
                <br />
                <input placeholder="new cost per pound" />
                <br />
                <button>Change unit price</button>

                <h3>Remove candy type from store</h3>
                <input placeholder="candy name" />
                <br />
                <button>Remove candy type</button>
                

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

export default EmployeeDashboard;