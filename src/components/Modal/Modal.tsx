import React from "react";
import "./ModalStyles.scss"
import logoHelp from "./help.png"


interface IModalProps {
    active: boolean
    SetActive: void
}



class Modal extends React.Component<IModalProps, {}>{
    constructor({active, SetActive}:IModalProps) {
        super({active, SetActive});
    }

    render() {
        return (
            <div className="modal">
                <img src={logoHelp}/>
                <div>
                    Если Вам нужна помощь консультанта, нажмите на кнопку "Вызвать консультанта",
                    для отмены операции нажмите "Отмена"
                </div>
                    <button>Вызвать консультанта</button>
                    <button>Отмена</button>
            </div>
        )
    }
}
export  default Modal
