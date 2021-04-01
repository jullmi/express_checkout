import React from "react";
import "./ModalStyles.scss"
import logoHelp from "./help.png"
import {AppDispatch, RootState} from "../../store";
import {connect} from "react-redux";
import {createModalAction} from "../../store/action-creators/ActionCreateModal";


class Modal extends React.Component<{}, {}>{



    render() {
        const modalActive = this.props
        console.log(modalActive)
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


const mapStateToProps = (store: RootState) => {
    return store.modal
};

const mapDispatchToProps = (dispatch: AppDispatch) => {
    return dispatch(createModalAction('work'))
}


export  default connect(mapStateToProps, mapDispatchToProps)(Modal)
