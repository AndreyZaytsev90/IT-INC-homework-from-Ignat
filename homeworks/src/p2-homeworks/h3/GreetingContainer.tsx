import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import s from './Greeting.module.css'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
  users: Array<UserType> // need to fix any
  addUserCallback: (name: string) => void // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
  const [name, setName] = useState<string>('') // need to fix any
  const [error, setError] = useState<string>('') // need to fix any

  const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value)
    setError('')// need to fix +
  }
  const addUser = () => {
    if (name.trim() !== "") {
      addUserCallback(name)
      setName('')
      alert(`Hello ${name}!`) // need to fix  +
      setError('')
    } else {
      setName('')
      setError("Name is required")
    }


  }
  const onKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && name) {
      addUser()
      setError('')
    }
  }

  const totalUsers = users.length// need to fix++


  return (
    <Greeting
      users={users}
      name={name}
      setNameCallback={setNameCallback}
      addUser={addUser}
      onKeyPress={onKeyPress}
      error={error}
      totalUsers={totalUsers}
    />
  )
}

export default GreetingContainer
