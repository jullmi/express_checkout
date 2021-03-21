import * as React from "react";
import LogoImage from "./logo.png";
import './LogoStyle.scss';


class Logo extends React.Component {
    render() {
        return (
            <>
                <img className='logo' src={LogoImage}/>
            </>
        );
    }
}

export default Logo