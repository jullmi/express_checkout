import {createAction} from "@reduxjs/toolkit";
import {SHOW_MODAL, CLOSE_MODAL} from "../constants";



export const showModal = createAction(SHOW_MODAL)
export const closeModal = createAction(CLOSE_MODAL)
