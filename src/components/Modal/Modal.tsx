import React from "react";
import "./ModalStyles.scss"
import logoHelp from "./help.png"
import {IModalProps} from "../../types";


class Modal extends React.Component<IModalProps, {}>{

    render() {
        return (
            <div className="modal">
                <img src={logoHelp}/>
                <div className="modal-content">
                    Если Вам нужна помощь консультанта, нажмите на кнопку "Вызвать консультанта",
                    для отмены операции нажмите "Отмена"
                </div>
                    <button onClick={this.setActive}>Вызвать консультанта</button>
                    <button>Отмена</button>
            </div>
        )
    }
}
export  default Modal


