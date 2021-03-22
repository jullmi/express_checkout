import React from "react";
import "./ExpressScanStyles.scss"
import Logo from "../Logo/Logo";

class ExpressScan extends React.Component<any, any>{

    render () {
        return (
            <>
                <Logo/>
                <h1 className='price'>Отсканируйте штрихкод товара или введите его вручную</h1>
                    <div className='grid-style'>
                        <input className=" input-field input[type=text]:focus + label price-input"/>
                        <button className="price-btn waves-effect waves-light btn lime lighten-4 ">Узнать цену</button>
                    </div>
                <div className='price-style'>здесь будет цена товара</div>
            </>
        )
    }
}
export default ExpressScan

