import React, {Dispatch, SetStateAction} from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import style from "./Affairs.module.css"
import styleBtn from "../h4/common/c2-SuperButton/SuperButton.module.css"
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

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


      <div style={{marginLeft: 60}}>
        <SuperButton className={styleBtn.buttonAll} onClick={setAll}>All</SuperButton>
        <SuperButton className={styleBtn.buttonHigh} onClick={setHigh}>High</SuperButton>
        <SuperButton className={styleBtn.buttonMiddle} onClick={setMiddle}>Middle</SuperButton>
        <SuperButton className={styleBtn.buttonLow} onClick={setLow}>Low</SuperButton>
      </div>

    </div>
  )
}

export default Affairs
