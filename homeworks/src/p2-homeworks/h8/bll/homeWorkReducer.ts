import {UserType} from "../HW8";

type ActionType = SortUpType | SortDownType | CheckType
let initialState: Array<UserType> /*= [
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
]*/

export const homeWorkReducer = (state = initialState,
                                action: ActionType
): Array<UserType> => { // need to fix any++++
    switch (action.type) {
        case 'SORT-UP': {
            // need to fix
            const copyState = [...state]
            return copyState.sort(function (a, b){
                if (a.name > b.name) {
                    return 1;
                }
                if (a.name < b.name) {
                    return -1;
                }
                return 0;
            })
        }
        case 'SORT-DOWN': {
            // need to fix
            const copyState = [...state]
            return copyState.sort(function (a, b){
                if (a.name > b.name) {
                    return -1;
                }
                if (a.name < b.name) {
                    return 1;
                }
                return 0;
            })
        }
        case 'CHECK': {
            // need to fix
            return state.filter(p => p.age > action.payload)
        }
        default:
            return state
    }
}

export const sortUpAC = () => {
    return {
        type: 'SORT-UP',
        payload: 'up'
    } as const
}
export const sortDownAC = () => {
    return {
        type: 'SORT-DOWN',
        payload: 'down'
    } as const
}
export const CheckAC = (age: number) => {
    return {
        type: 'CHECK',
        payload: age
    } as const
}


type SortUpType = ReturnType<typeof sortUpAC>
type SortDownType = ReturnType<typeof sortDownAC>
type CheckType = ReturnType<typeof CheckAC>