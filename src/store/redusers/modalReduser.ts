import {IModalActionTypes, IModalState, modalAction} from "../../types/modal";


export const initialState: IModalState = {
    modalActive: true,
    error: null,
};



export const modalReducer = (state = initialState, action: modalAction): IModalState  => {
    switch (action.type) {
        case IModalActionTypes.SHOW_MODAL:
            return {
                modalActive: true,
                error: null
            };
        case IModalActionTypes.CLOSE_MODAL:
            return {
                modalActive: false,
                error: null
            };
        case IModalActionTypes.ERROR_MODAL:
            return {
                modalActive: false,
                error: action.payload
            };
        default:
            return state
    }
}




