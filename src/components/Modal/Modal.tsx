import React from "react";
import "./ModalStyles.scss"
import logoHelp from "./help.png"
import {connect} from "react-redux";
import {RootState} from "../../store/store";
import {createModalAction, closeModalAction} from "../../store/action-creators/ActionCreateModal";


type State = {

}

type Props = {
    modalActive?: boolean,
    error?: null | string,
}

class Modal extends React.Component<Props, State>{

    render() {

        return (
            <div className={this.props.modalActive ? 'modal-active' : 'modal'}>
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

const mapStateToProps = (store: RootState) => ({
    modal: store.modal
});

const mapDispatchToProps = () => ({
    createModalAction,
    closeModalAction,
})


export  default connect(mapStateToProps,mapDispatchToProps()) (Modal)
