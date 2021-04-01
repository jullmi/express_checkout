import {IModalActionTypes} from "../../types/modal";

export const createModalAction = (payload: string) => {
    return {
        type: IModalActionTypes.SHOW_MODAL ,
        payload,
    }
};



