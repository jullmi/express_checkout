import { combineReducers } from '@reduxjs/toolkit'
import {modalReducer} from "./modalReduser";




export const rootReducer = combineReducers({
    modal: modalReducer,

})


