import React from "react";
import "./FooterStyles.scss"
import Modal from "../Modal/Modal";



class Footer extends React.Component<{}, {}>{

    showModal = (event: React.MouseEvent<HTMLButtonElement>) => {

    }



    render() {
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
            <Modal />
            </>
        );
    }
}




export default Footer


