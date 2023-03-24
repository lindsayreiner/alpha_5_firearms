import React from 'react';
import { NavLink } from 'react-router-dom';


import '../styles/App.css';
import '../styles/Nav.css'

export default function Nav() {
    return (
        <>
            <nav className="nav">
                <NavLink className="bizName" to="/"><img href="../images/a5_logo.png" /></NavLink>

                <ul className="navCont">
                    <li className="navBtn">
                        <NavLink className="navBtnLink" to="/">Home</NavLink>
                    </li>
                    <li className="navBtn">
                        <NavLink className="navBtnLink" to="https://training.usconcealedcarry.com/instructor/403f6128-6d56-11eb-aad4-02420a020192" target="_blank">Courses</NavLink>
                    </li>
                    <li className="navBtn">
                        <NavLink className="navBtnLink" to="/about">Meet Your Instructor</NavLink>
                    </li>
                    <li className="navBtn">
                        <NavLink className="navBtnLink" to="/blog">Blog</NavLink>
                    </li>
                    <li className="navBtn">
                        <NavLink className="navBtnLink" to="/contact">Contact</NavLink>
                    </li>
                </ul>
            </nav>
        </>
    )
}
