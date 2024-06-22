import React from "react";
import reactLogo from '../assets/react.svg'

export default function Navbar(){
    return(
        <nav>
            <img src={reactLogo} className="react-img" alt="React logo" />
            <h3 className="h3tag-cont">React Facts</h3>
            <h4 className="h4tag-cont">React Ramp up!</h4>
        </nav>
    )
}