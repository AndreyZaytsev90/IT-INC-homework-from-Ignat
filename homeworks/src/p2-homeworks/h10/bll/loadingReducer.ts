export type StateType = {
    loading: boolean
}

const initialState : StateType = {
    loading: false
}

export const loadingReducer = (state = initialState, action: LoadingType): StateType => { // fix any +
    switch (action.type) {
        case "LOADING": {
            return {
                ...state,
                loading: action.payload.loading
            }
        }
        default: return state
    }
}

export type LoadingType = ReturnType<typeof loadingAC>

export const loadingAC = (loading: boolean) => {
    return {
        type: "LOADING",
        payload: {loading}
    } as const
} // fix any +