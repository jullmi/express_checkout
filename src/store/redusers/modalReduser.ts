import {IModalActionTypes, IModalState, modalAction} from "../../types/modal";


export const initialState: IModalState = {
    modalActive: true,
};



export  const modalReducer = (state = initialState, action: modalAction): IModalState  => {
    switch (action.type) {
        case IModalActionTypes.SHOW_MODAL:
            return {
                ...state,
                modalActive: true,
            };
        case IModalActionTypes.CLOSE_MODAL:
            return {
                ...state,
                modalActive: false,
            };

        default:
            return state
    }
}







