import React from "react";
import { AiFillCodepenCircle } from "react-icons/ai";

export default function Navbar(){
    return(
        <nav className="navbar">
            <AiFillCodepenCircle />
            <h3 className="title_tag">my travel journal.</h3>
        </nav>
    )
}