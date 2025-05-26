import React from "react";
import ReactDOM from "react-dom/client";


// creating react element from react (i repeat core react)
const heading = React.createElement("h1", {
        id: "heading"
    },
    "First argument is which element to create, second is the Attribute(class,or id) and third is what to rendersss"
)
const root = ReactDOM.createRoot(document.getElementById("root"));
// JSX better way to create React Element
// creating react element from JSX (i repeat JSX)
const jsxHeading = <h1>JSX Here </h1>
console.log(jsxHeading, "returns  object same as heading")


root.render( jsxHeading); // will work fine 


// REACT COMPONENTS //
function HeaderComponent(params) {
    return (
        <div>
            <h1>This is Functional Component</h1>
        </div>
    )
    
}

const HeaderComponentArrow = () => {
    return (
        //  This is component composition
        <div>
            <h1>This is Functional Component using Arrow functions</h1>
            <HeaderComponent/>
            <h2>This is component composition</h2>
        </div>
    )
}

const HeaderComponentShortHand = () => <h1>This is Short Hand Functional Component using Arrow functions</h1>

root.render(<HeaderComponentArrow/>); // functional component are rendered like this.