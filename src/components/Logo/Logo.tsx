import * as React from "react";
import LogoImage from "./logo.png";
import './LogoStyles.scss';


class Logo extends React.Component {
    render() {
        return (
            <>
                <img className='logo' src={LogoImage} alt=''/>
            </>
        );
    }
}

export default Logo