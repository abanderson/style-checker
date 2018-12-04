import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import StyleChecker from "./components/StyleChecker";
import Rules from "./components/Rules";
import "./App.css";

class App extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div class="container">
                    <Switch>
                        <Route exact path="/" component={StyleChecker} />
                        <Route exact path="/rules" component={Rules} />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default App;
