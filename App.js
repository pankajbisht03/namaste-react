// previously React is coming from cdn links as soon as we installed a package react we need to import it to get access.

import React from "react"
//for react above 18 versions we need to use "react-dom/client" else was giving error ReactDOM.createRoot is not a function.
import ReactDOM from "react-dom/client"
// It is React who is responsible for creating element
const heading = React.createElement("h1", {
        id: "heading"
    },
    "First argument is which element to create, second is the Attribute(class,or id) and third is what to rendersss"
)
console.log(heading) //object with properties like props , type, etc
//It is ReactDom who is responsible for creating root or accesing root
const root = ReactDOM.createRoot(document.getElementById("root"));



// ***********************************************//
//if we want to create nested element structure
//we have to give third argument as which child to render

const parent = React.createElement("div", {
    id: "parent"
}, React.createElement("h1", {
    id: "child-h1"
}, React.createElement("h2", {
    id: "child-h2"
}, "Inside of h1 Tag")))


// ***********************************************//
// if we want to create siblings , we can pass them as array, as below;
const nestedParent = React.createElement("div", {
    id: "siblings-parent"
}, [
    React.createElement("h1", {
        id: "siblings-one"
    }, "Sibling One"),
    React.createElement("h2", {
        id: "siblings-two"
    }, "Sibling Two")
]);
// render method will get the object and render it inside root.
root.render(heading);


// ********************** NEED OF JSX *************************//
// It is very mind boglling task to create these type of structures thats why react introduced JSX