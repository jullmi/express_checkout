import React from "react";
import "./FooterStyles.scss"
import {RootState} from "../../store/store";
import {createModalAction, closeModalAction} from "../../store/action-creators/ActionCreateModal";
import {connect} from "react-redux";




interface Props {


}

interface State {

}


class Footer extends React.Component<any,any> {


<<<<<<< HEAD

=======
    showModal = () => this.props.createModalAction()
>>>>>>> 3e003b1d5a1e112141d69eb10527bfba005647f7

    render() {

        return (
            <>
            <div className="footer">
<<<<<<< HEAD




                <button onClick={() => this.props.createModalAction()} className="waves-effect waves-light btn-large light-green darken-4">
=======
                <button onClick={this.showModal} className="waves-effect waves-light btn-large light-green darken-4">
>>>>>>> 3e003b1d5a1e112141d69eb10527bfba005647f7
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


