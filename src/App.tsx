import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";

import FirstPage from './components/Home'
import ExpressScan from "./components/ExpressScan/ExpressScan";
import ShopPage from "./components/ShopPage/ShopPage";



class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div className="container">
                    <Switch>
                        <Route component={FirstPage} path="/" exact/>
                        <Route component={ExpressScan} path="/expressscan"/>
                        <Route component={ShopPage} path="/shoppage"/>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}
export default App;
