import React, {useState} from 'react'
import {NavLink} from "react-router-dom";
import style from "./css/header.module.css"
import Arrow from "./svg/arrow.svg"

function Header() {

    const [active, setActive] = useState(false)
    const onClickHandler = () => setActive(!active)

    return (
        <div className={active? `${style.header_active}`:`${style.header}` }>
        {/*    <button style={Arrow} className={style.arrow} onClick={onClickHandler}>Arrow</button>*/}
            <img src={Arrow} className={active? `${style.arrow_active}`:`${style.arrow}` } onClick={onClickHandler} alt={Arrow}/>
            <div className={style.links}>
                <NavLink to={'/pre-junior'}>pre-Junior</NavLink>
                <NavLink to={'/junior'}>Junior</NavLink>
                <NavLink to={'/junior+'}>Junior+</NavLink>
            </div>
        </div>
    )
}

export default Header
