import React from "react";
import TrollImage from '../assets/trollface.png'
console.log(TrollImage)

export default function Navbar(){
    return(
        <nav>
            <img className="troll" src={TrollImage}/>
            <h1 className="title_name">Meme Generator</h1>
        </nav>
    );
}