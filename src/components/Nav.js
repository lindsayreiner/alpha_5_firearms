import React from 'react';
import { NavLink } from 'react-router-dom';

import '../styles/App.css';
import '../styles/Nav.css'

export default function Nav() {
    return (
        <>
            <nav className="nav">
                <NavLink className="bizName" to="/">Alpha 5 Firearms Training</NavLink>
                <ul className="navCont">
                    <li className="navBtn">
                        <NavLink className="navBtnLink" to="/about">About</NavLink>
                    </li>
                    <li className="navBtn">
                        <NavLink className="navBtnLink" to="/coaching">Coaching</NavLink>
                    </li>
                    <li className="navBtn">
                        <NavLink className="navBtnLink" to="/contact">Contact</NavLink>
                    </li>
                </ul>
            </nav>
        </>
    )
}
