import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'
import styleBtn from "../h4/common/c2-SuperButton/SuperButton.module.css"
import styleInput from "../h4/common/c1-SuperInputText/SuperInputText.module.css"
import {UserType} from "./HW3";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";

type GreetingPropsType = {
  name: string // need to fix any
  setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
  addUser: () => void // need to fix any
  onKeyPress: (e: KeyboardEvent<HTMLInputElement>) => void
  error: string // need to fix any
  totalUsers: number  // need to fix any
  users: Array<UserType>
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = ({
                                                 name,
                                                 setNameCallback,
                                                 addUser,
                                                 onKeyPress,
                                                 error,
                                                 totalUsers,
                                                 users
                                               }) => {

  const inputClass = error ? s.errorInput : s.input  // need to fix with (?:) ++
  const greetingInput = `${styleInput.greetingInput} ${inputClass}`

  return (

    <div style={{marginLeft: 20}}>
      <div>
        <SuperInputText className={greetingInput}
                        value={name}
                        onChange={setNameCallback}
                        onKeyPress={onKeyPress}
                        onBlur={setNameCallback}
                        placeholder={"Add text"}

        />
        <SuperButton className={styleBtn.buttonAdd}
                     style={{marginLeft: 20}}
                     onClick={addUser}>Add</SuperButton>
        <span style={{marginLeft: 20}}>{totalUsers}</span>
      </div>
      <div className={s.someClass}>{error}</div>
      <div>
        {users.map(u => <div>{u.name}</div>)}
      </div>
    </div>
  )
}

export default Greeting
