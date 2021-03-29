import {IModalActionTypes, IModalState, modalAction} from "../../types/modal";


const initialState: IModalState = {
    modalActive: false,
    error: null,
};



export const modalReduser = (state = initialState, action: modalAction): IModalState  => {
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




