import React from "react";
import './FooterStyles2.scss'
import {withRouter, RouteComponentProps} from "react-router";

interface IFooter2props extends RouteComponentProps{

}



class Footer2 extends React.Component <IFooter2props, {}> {

        redirectHome = () => {
        const history = this.props.history
        history.push ('/')
    }

    render() {
        return (
            <div className="footer">
                <button className="waves-effect waves-light btn-large light-green darken-4">
                    Помощь
                </button>
                <button className="waves-effect waves-light btn-large light-green darken-4" onClick={this.redirectHome}>
                    Вернуться на главную страницу
                </button>
            </div>
        );
    }
}

export default withRouter(Footer2)



