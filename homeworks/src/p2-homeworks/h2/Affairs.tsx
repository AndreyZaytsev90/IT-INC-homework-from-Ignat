import React, {Dispatch, SetStateAction} from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import style from "./Affairs.module.css"

type AffairsPropsType = {
    data: Array<AffairType>
    setFilter: Dispatch<SetStateAction<FilterType>>
    deleteAffairCallback: (_id: number) => void
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair
            key={a._id}
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />

    ))

    const setAll = () => {
        props.setFilter('all')
    }
    const setHigh = () => {
        props.setFilter('high')
    }
    const setMiddle = () => {
        props.setFilter('middle')
    }
    const setLow = () => {
        props.setFilter('low')
    }

    return (
        <div className={style.global}>

            {mappedAffairs}
            <div style={{marginLeft: 20}} className={style.boxButton}>
                <button onClick={setAll}>All</button>
                <button style={{color: "red"}} onClick={setHigh}>High</button>
                <button style={{color: "orange"}} onClick={setMiddle}>Middle</button>
                <button style={{color: "green"}} onClick={setLow}>Low</button>
            </div>

        </div>
    )
}

export default Affairs
