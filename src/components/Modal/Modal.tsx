import React from "react";
import "./ModalStyles.scss"
import logoHelp from "./help.png"
import {connect} from "react-redux";
import {RootState} from "../../store/store";
import {createModalAction, closeModalAction} from "../../store/action-creators/ActionCreateModal";


type State = {

}

type ModalProps = {

}


class Modal extends React.Component<any, State>{

    render() {
        const a = this.props
        console.log(a)

        const {closeModalAction, createModalAction, modal} = this.props
        console.log(closeModalAction)
        console.log(createModalAction)
        console.log(modal)
        console.log(modal.modalActive)

        return (
            <div className={modal.modalActive  ? 'modal-active' : 'modal'}>
                <div className="modal-content">
                    <img src={logoHelp} alt={''}/>
                        <p>Если Вам нужна помощь консультанта, нажмите на кнопку
                            <br/>
                            "Вызвать консультанта", для отмены операции нажмите "Отмена"
                        </p>
                    <button>Вызвать консультанта</button>
                    <button>Отмена</button>
                </div>

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
