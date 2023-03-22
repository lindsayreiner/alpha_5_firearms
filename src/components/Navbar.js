import React from 'react';
import { NavLink } from 'react-router-dom';

import '../styles/Navbar.css';

export default function Navbar() {
    return (
        <>
            <nav class="top-nav">
                <NavLink className="bizName" to="/">
                    A5
                </NavLink>
                <input id="menu-toggle" type="checkbox" />
                <label class='menu-button-container' for="menu-toggle">
                    <div class='menu-button'></div>
                </label>
                <ul class="menu">
                    <li>
                        <NavLink className="navBtnLink" to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink className="navBtnLink" to="https://training.usconcealedcarry.com/instructor/403f6128-6d56-11eb-aad4-02420a020192" target="_blank">Courses</NavLink>
                    </li>
                    <li>
                        <NavLink className="navBtnLink" to="/about">Meet Your Instructor</NavLink>
                    </li>
                    <li>
                        <NavLink className="navBtnLink" to="/blog">Blog</NavLink>
                    </li>
                    <li>
                        <NavLink className="navBtnLink" to="/contact">Contact</NavLink>
                    </li>
                </ul>
            </nav>
        </>
    )
}
