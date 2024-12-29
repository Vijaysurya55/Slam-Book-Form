import React from "react";
import Apple from "./Apple.jsx";
import './Form.css'
class Forms extends React.Component {
    
    render(){
        return (
            <div>
                <form id="sample">
    <label>Name:</label>
    <input id="name"type="text" placeholder="Enter your name" ></input>
    <label>E-mail:</label>
    <input id="email"type="text" placeholder="Enter your e-mail" ></input>
    <button id="b1">Click to submit</button>
    </form>
                <Apple/>
                </div>
        )
    }
}
export default Forms;