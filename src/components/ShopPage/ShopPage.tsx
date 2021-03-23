import React from "react";
import Logo from "../Logo/Logo";
import Footer3 from "../Footer3/Footer3";
import "./ShopPage.scss"


class ShopPage extends React.Component<any, any>{



    render() {
        return (
            <>
                <Logo/>
                <div className="shop">
                    <button className=" shop-btn main-btn shop-btn-1 waves-effect waves-light btn lime lighten-4">
                        Отсканируйте штрихкод товара, чтобы начать покупки
                    </button>

                        <h5>или</h5>

                        <button className="shop-btn main-btn waves-effect waves-light btn lime lighten-4">
                            Взвесьте товар
                        </button>
                        <button className="shop-btn main-btn waves-effect waves-light btn lime lighten-4">
                            Выберите товар без штрихкода
                        </button>
                    </div>
                <Footer3/>
            </>

        )
    }
}

export default ShopPage


