import React from 'react';
import { NavLink } from 'react-router-dom';

import '../styles/Navbar.css';
import logo from '../images/ag_logo_2.png';

export default function Navbar() {
    return (
        <>
            <nav class="top-nav">

                <NavLink className="navBtn" to="/">
                    <img className="logo" src={logo} alt="alpha firearms logo" />
                </NavLink>

                <input id="menu-toggle" type="checkbox" />
                <label class='menu-button-container' for="menu-toggle">
                    <div class='menu-button'></div>
                </label>
                <ul class="menu">
                    <li>
                        <NavLink className="navBtn" to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink className="navBtn" to="https://training.usconcealedcarry.com/instructor/403f6128-6d56-11eb-aad4-02420a020192" target="_blank">Courses</NavLink>
                    </li>
                    <li>
                        <NavLink className="navBtn" to="/about">Meet Your Instructor</NavLink>
                    </li>
                    {/* <li>
                        <NavLink className="navBtn" to="/blog">Blog</NavLink>
                    </li> */}
                    <li>
                        <NavLink className="navBtn" to="/contact">Contact</NavLink>
                    </li>
                </ul>
            </nav>
        </>
    )
}
