import {IModalActionTypes} from "../../types/modal";


export const createModalAction = () => {
    return {
        type: IModalActionTypes.SHOW_MODAL,
    }
};

export const closeModalAction = () => {
    return {
        type: IModalActionTypes.CLOSE_MODAL,
    }
};


