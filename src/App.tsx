import React from 'react';
import Main from "./components/Main/Main";
import Footer from "./components/Footer";
import Logo from "./components/Logo/Logo";


class App extends React.Component {
    render() {
        return (
            <div className="container">
                <Logo/>
                <Main/>
                <Footer/>
            </div>
        );
    }
}
export default App;
