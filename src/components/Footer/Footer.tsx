import React from "react";
import "./FooterStyles.scss"
import Modal from "../Modal/Modal";
import {RootState} from "../../store";
import {connect} from "react-redux";


class Footer extends React.Component<any, any>{


    showModal = (event: React.MouseEvent<HTMLButtonElement>) => {

    }



    render() {
        const {modalActive} = this.props
        console.log(modalActive)
        return (
            <>
            <div className="footer">
                <button onClick={this.showModal} className="waves-effect waves-light btn-large light-green darken-4">
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

const mapStateToProps = (store: RootState) => {
    console.log (store.modal)
    return store.modal
};
export default connect(mapStateToProps)(Footer)


