import React from 'react'
import {AffairType} from "./HW2";
import style from "./Affairs.module.css"

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType
    deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => props.affair

    return (
        <div className={style.someClass}>
            <li>
                <span>{props.affair.name}</span>
                <span>{props.affair.priority}</span>
                <button onClick={deleteCallback}>X</button>
            </li>
        </div>
    )
}

export default Affair
