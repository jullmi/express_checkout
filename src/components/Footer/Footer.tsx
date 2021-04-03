import React from "react";
import "./FooterStyles.scss"
import Modal from "../Modal/Modal";
import {RootState} from "../../store/store";
import {createModalAction, closeModalAction} from "../../store/action-creators/ActionCreateModal";
import {connect} from "react-redux";



class Footer extends React.Component<any,any> {


    render() {

        return (
            <>
            <div className="footer">
                <button onClick={() => this.props.createModalAction()} className="waves-effect waves-light btn-large light-green darken-4">
                    Помощь
                </button>
                <button className="waves-effect waves-light btn-large light-green darken-4">
                    Каталог
                </button>
                    <select className="browser-default select">
                        <option value="ru" className="option">Русский </option>
                        <option value="en">English</option>
                    </select>
            </div>
            <Modal/>
            </>
        );
    }
}




const mapStateToProps = (store: RootState) => ({
    modal: store.modal
});

const mapDispatchToProps = () => ({
    createModalAction,
    closeModalAction,
});

export default connect(mapStateToProps, mapDispatchToProps())(Footer)


