import * as React from "react";
import "./MainStyles.scss"

class Main extends React.Component {


    render() {
        return (
            <div className="main">
                <button className="main-btn waves-effect waves-light btn lime lighten-4">
                    <a href={""}>
                        Отсканируйте штрихкод, чтобы узнать цену товара
                    </a>
                </button>
                <button className=" main-btn waves-effect waves-light btn lime lighten-4">
                    <a href={""}>
                        Нажмите, чтобы начать покупки
                    </a>
                </button>
            </div>
        );
    }
}

export default Main

