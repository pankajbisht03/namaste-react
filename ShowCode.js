import React from "react";
import ReactDOM from "react-dom/client"
import RestaurantList from "./src/Components/RestaurantList"

import Header from "./src/Components/Header"

// we will be building a project in this.
// project will be like food ordering app (like swiggy and zomato)
// before writing code we need to plan , how will the ui look.
// we will be having component based architecture.
// we will have three components: 
// * Header => Logo, Nav items
//  * Body => Search Input, Restaurant Card
//   * Footer => Copyright, Address
const Body = () => {
    return (
        <div className="body">
            <div className="search-bar">
                <h5>Search</h5>
            </div>
            <div className="res-container">
                <RestaurantList/>

            </div>

        </div>
    )
}


const AppLayout = () => {
    return <div>
        {/* Functional Header component should be called here  */}
        <Header/>
        <Body/>
    </div>
}

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)