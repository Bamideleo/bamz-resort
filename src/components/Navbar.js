import React, {useState} from 'react'
import logo from '../images/logo3.png';
import {Link} from 'react-router-dom';
import { FaAlignRight } from "react-icons/fa";

function Navbar() {
const [click, setClick] = useState(false)
const ToggleMoblie = ()=>{
    setClick(!click);
}
    return (
        <nav className="navbar">
            <div className="nav-center">
                <div className="nav-header">
                    <Link to="/">
                        <img src={logo} alt="Hotel Resort"/>
                    </Link>
                   
                    <button  className="nav-btn" onClick={ToggleMoblie}>
                        <FaAlignRight className="nav-icon"/>
                    </button>
                </div>
                <ul className={click ?"nav-links show-nav":"nav-links"}>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/Rooms">Rooms</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
