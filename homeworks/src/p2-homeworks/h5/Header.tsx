import React from 'react'
import {NavLink} from "react-router-dom";

function Header() {
    return (
        <div>
            <NavLink to={'/pre-junior'}>preJunior</NavLink>---
            <NavLink to={'/junior'}>Junior</NavLink>---
            <NavLink to={'/junior+'}>Junior+</NavLink>
        </div>
    )
}

export default Header
