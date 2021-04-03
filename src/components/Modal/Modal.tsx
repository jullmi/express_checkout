import React from "react";
import "./ModalStyles.scss"
import logoHelp from "./help.png"


type State = {

}

type Props = {
    modalActive?: boolean,
    error?: null | string,
}

class Modal extends React.Component<Props, State>{

    render() {
        return (
            <div className={true ? 'modal-active' : 'modal'}>
                <div className="modal-content">
                    <img src={logoHelp} alt={''}/>
                        <p>Если Вам нужна помощь консультанта, нажмите на кнопку "Вызвать консультанта",
                            для отмены операции нажмите "Отмена"
                        </p>
                </div>
                    <button>Вызвать консультанта</button>
                    <button>Отмена</button>
            </div>
        )
    }
}


export  default Modal
