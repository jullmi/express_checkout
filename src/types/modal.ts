export interface IModalState {
    modalActive: boolean;
}


interface IShowModalAction {
    type: IModalActionTypes.SHOW_MODAL;
}

interface ICloseModalAction {
    type: IModalActionTypes.CLOSE_MODAL;
}

export type modalAction = IShowModalAction | ICloseModalAction

export enum IModalActionTypes {
    SHOW_MODAL = "SHOW_MODAL",
    CLOSE_MODAL = "CLOSE_MODAL",
}





