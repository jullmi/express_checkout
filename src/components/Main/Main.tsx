import * as React from "react";
import "./MainStyles.scss"
import {withRouter, RouteComponentProps} from "react-router-dom";



interface IMainProps extends RouteComponentProps {
}


class Main extends React.Component<IMainProps, {}> {

    redirectExpressScan = () => {
        const history = this.props.history
        history.push ('/expressscan')
    }

    redirectShopPage = () => {
        const history = this.props.history
        history.push('/shoppage')
    }


    render() {
        return (
            <div className="main">
                <button onClick={this.redirectExpressScan} className="main-btn waves-effect waves-light btn lime lighten-4">
                        Отсканируйте штрихкод, чтобы узнать цену товара
                </button>
                <button onClick={this.redirectShopPage} className=" main-btn waves-effect waves-light btn lime lighten-4">
                        Нажмите, чтобы начать покупки
                </button>
            </div>
        );
    }
}

export default withRouter(Main)

