import React from 'react'
import {CheckAC, homeWorkReducer, sortDownAC, sortUpAC} from '../homeWorkReducer'
import {UserType} from "../../HW8";

let initialState: Array<UserType> // need to fix any ++++

beforeEach(() => {
    initialState = [
        {_id: 0, name: 'Кот', age: 3},
        {_id: 1, name: 'Александр', age: 66},
        {_id: 2, name: 'Коля', age: 16},
        {_id: 3, name: 'Виктор', age: 44},
        {_id: 4, name: 'Дмитрий', age: 40},
        {_id: 5, name: 'Ирина', age: 55},
    ]
})

test('sort name up', () => {
    const newState = homeWorkReducer(initialState, sortUpAC())

    console.log(newState)
    expect(initialState).not.toBe(newState)
    expect(newState[0].name).toBe('Александр')
    expect(newState[1].name).toBe('Виктор')
    expect(newState[5].name).toBe('Кот')
})
test('sort name down', () => {
    const newState = homeWorkReducer(initialState, sortDownAC())
    expect(initialState).not.toBe(newState)
    expect(newState[5].name).toBe('Александр')
    expect(newState[4].name).toBe('Виктор')
    expect(newState[0].name).toBe('Кот')
})
test('check age 18', () => {
    const newState = homeWorkReducer(initialState, CheckAC(18))
    expect(initialState).not.toBe(newState)
    expect(newState.length).toBe(4)
    expect(newState[0].name).toBe('Александр')
    expect(newState[3].name).toBe('Ирина')
})
