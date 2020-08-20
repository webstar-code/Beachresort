import React, { useState } from 'react';
import logo from '../images/logo.svg'
import { Link } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const Navbar = () => {
    const [isOpen, setisOpen] = useState(false);

    const handleClick = () => {
        setisOpen(!isOpen);
    }
    return (
        <nav className="navbar">
            <div className="nav-center">
                <div className="nav-header">
                    <Link to="/">
                        <img src={logo} alt="Beach resort" />
                    </Link>
                    {isOpen ?
                        <button className="nav-btn" onClick={() => handleClick()}>
                            <AiOutlineClose className="nav-icon" />
                        </button>
                        :
                        <button className="nav-btn" onClick={() => handleClick()}>
                            <AiOutlineMenu className="nav-icon" />
                        </button>
                    }
                </div>
                <ul className={isOpen ? "nav-links show-nav" : "nav-links"}>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/rooms">Rooms</Link>
                    </li>
                </ul>
            </div>

        </nav>

    )
}

export default Navbar;