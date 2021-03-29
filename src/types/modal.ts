export interface IModalState {
    modalActive: boolean;
    error: null | string;
}


interface IShowModalAction {
    type: IModalActionTypes.SHOW_MODAL;
}

interface ICloseModalAction {
    type: IModalActionTypes.CLOSE_MODAL;
}
interface IErrorModalAction {
    type: IModalActionTypes.ERROR_MODAL;
    payload: string;
}


export type modalAction = IShowModalAction | ICloseModalAction | IErrorModalAction

export enum IModalActionTypes {
    SHOW_MODAL = "SHOW_MODAL",
    CLOSE_MODAL = "CLOSE_MODAL",
    ERROR_MODAL = "ERROR_MODAL",
}





