import React, {useState} from 'react'
import {homeWorkReducer} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import styleBtn from "../h4/common/c2-SuperButton/SuperButton.module.css";
import style from "../h2/Affairs.module.css";

export type UserType = {
  _id: number
  name: string
  age: number
}

const initialPeople: Array<UserType> = [
  {_id: 0, name: 'Кот', age: 3},
  {_id: 1, name: 'Александр', age: 66},
  {_id: 2, name: 'Коля', age: 16},
  {_id: 3, name: 'Виктор', age: 44},
  {_id: 4, name: 'Дмитрий', age: 40},
  {_id: 5, name: 'Ирина', age: 55},
]

function HW8() {
  const [people, setPeople] = useState<Array<UserType>>(initialPeople) // need to fix any +++

  // need to fix any +++
  const finalPeople = people.map((p: UserType) => (
    <div key={p._id} className={style.box}>
      <div>{p.name}</div>
      <div>{p.age}</div>
    </div>
  ))

  const sortUp = () => setPeople(homeWorkReducer(initialPeople, {type: 'SORT-UP', payload: 'up'}))
  const sortDown = () => setPeople(homeWorkReducer(initialPeople, {type: 'SORT-DOWN', payload: 'down'}))
  const toEighteen = () => setPeople(homeWorkReducer(initialPeople, {type: 'CHECK', payload: 18}))

  return (
    <div>
      <hr/>
      <h2 style={{marginLeft: 20}}>homeworks 8</h2>

      {/*should work (должно работать)*/}
      <div style={{marginLeft: 20, fontSize: '20px'}}>
        {finalPeople}
      </div>

      <div style={{paddingTop: 20, marginLeft: -9}}>
        <SuperButton className={styleBtn.buttonLow} onClick={sortUp}>SortUp</SuperButton>
        <SuperButton className={styleBtn.buttonHigh} onClick={sortDown}>SortDown</SuperButton>
        <SuperButton className={styleBtn.buttonMiddle} onClick={toEighteen}>Check18</SuperButton>
      </div>

      <hr/>
      {/*для личного творчества, могу проверить*/}
      {/*<AlternativePeople/>*/}
      <hr/>
    </div>
  )
}

export default HW8
