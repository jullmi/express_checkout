import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";

import FirstPage from './components/FirstPage'
import ExpressScan from "./components/ExpressScan/ExpressScan";



class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div className="container">
                    <Switch>
                        <Route component={FirstPage} path="/" exact/>
                        <Route component={ExpressScan} path="/expressscan"/>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}
export default App;
