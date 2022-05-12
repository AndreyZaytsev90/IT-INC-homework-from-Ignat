import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'
import {UserType} from "./HW3";

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    onKeyPress: (e: KeyboardEvent<HTMLInputElement>) => void
    error: string // need to fix any
    totalUsers: number // need to fix any
    users: Array<UserType>
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = ({name, setNameCallback, addUser, onKeyPress, error, totalUsers, users}) => {
    const inputClass = error ? s.errorImput : s.imput   // need to fix with (?:)

    return (

        <div>
            <div>
                <input value={name}
                       onChange={setNameCallback}
                       onKeyPress={onKeyPress}
                       className={inputClass}
                       onBlur={setNameCallback}
                />
                {/*<span>{error}</span>*/}
                <button onClick={addUser} /*disabled={!name}*/>add</button>
                <span>{totalUsers}</span>
            </div>
            <div className={s.someClass}>{error}</div>
            <div>
                {users.map(u => <div>{u.name}</div>)}
            </div>
        </div>
    )
}

export default Greeting
