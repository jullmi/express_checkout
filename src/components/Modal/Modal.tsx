import React from "react";
import "./ModalStyles.scss"
import logoHelp from "./help.png"



class Modal extends React.Component<{}, {}>{

    render() {
        return (
            <div className="modal">
                <img src={logoHelp}/>
                <div className="modal-content">
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



