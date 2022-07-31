import React from 'react'
import {AffairType} from "./HW2";
import style from "./Affairs.module.css"

type AffairPropsType = {
    affair: AffairType
    deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => props.deleteAffairCallback(props.affair._id)


    return (
        <ul className={style.someClass}>
            <li className={style.box}>
                <div className={style.name}>{props.affair.name}</div>
                <div className={style.priority}
                      style={props.affair.priority === 'high'
                          ? {color: 'red'} : props.affair.priority === 'middle'
                              ? {color: 'orange'} : {color: 'green'}}>{props.affair.priority}</div>
                <button className={style.button} onClick={deleteCallback}>X</button>
            </li>
        </ul>
    )
}

export default Affair
