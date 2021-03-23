import React from "react";
import {withRouter, RouteComponentProps} from "react-router";


interface IFooterProps3 extends RouteComponentProps {

}

class Footer3 extends React.Component<IFooterProps3, {}>{

    redirectHome = () => {
        const history = this.props.history
        history.push ("/")
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
                <button onClick={this.redirectHome} className="waves-effect waves-light btn-large light-green darken-4">
                    Назад
                </button>

            </div>
        );
    }
}

export default withRouter(Footer3)

