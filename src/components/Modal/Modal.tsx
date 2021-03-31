import React from "react";
import "./ModalStyles.scss"
import logoHelp from "./help.png"
import {RootState} from "../../store";
import {connect} from "react-redux";



class Modal extends React.Component<{}, {}>{




    render() {
        return (
            <div className="modal">
                <img src={logoHelp} alt={''}/>
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


// const mapStateToProps = (store: RootState) => {
//     console.log (store.modal.modalActive)
//     return store.modal
// };
export  default Modal
