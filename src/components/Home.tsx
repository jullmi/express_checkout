import React from 'react';
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import Logo from "./Logo/Logo";
import Modal from "./Modal/Modal";



class App extends React.Component <{}, {}> {
    render() {
        return (
            <>
                <Logo/>
                <Main/>
                <Footer/>
                <Modal/>
            </>

        );
    }
}
export default App;
