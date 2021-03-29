import React from "react";
import "./FooterStyles.scss"



class Footer extends React.Component<any, any>{



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
            </div>
        );
    }
}

export default Footer

