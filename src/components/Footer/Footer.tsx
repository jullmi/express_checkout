import React from "react";
import "./FooterStyles.scss"
import Modal from "../Modal/Modal";
import {showModal} from "../../actions/ActionCreateModal";
import {IModalProps} from "../../types";


class Footer extends React.Component<any, any>{
    constructor(props:IModalProps) {
        super(props);

        this.state = {
            active: true,
        }
    }

    setActive = () => {
        return active = false
    }

    render() {
        return (

            <div className="footer">
                <button className="waves-effect waves-light btn-large light-green darken-4">
                    Помощь
                </button>
                <button className="waves-effect waves-light btn-large light-green darken-4">
                    Каталог
                </button>
                    <select className="browser-default select">
                        <option value="ru" className="option">Русский </option>
                        <option value="en">English</option>
                    </select>
                <Modal/>
            </div>
        );
    }
}

export default Footer
