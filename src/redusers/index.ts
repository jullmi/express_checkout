import { combineReducers } from '@reduxjs/toolkit'
import modalReduser from "./modalReduser"

export const rootReducer = combineReducers({
    modalReduser
})



export type RootState = ReturnType<typeof rootReducer>

