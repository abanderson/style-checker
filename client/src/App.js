import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Axios from "axios";
import Navbar from "./components/Navbar";
import StyleChecker from "./components/StyleChecker";
import Rules from "./components/Rules";
import "./App.css";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            styleRules: [],
            numStyleRules: 0
        };
    }

    getStyleRules() {
        Axios.get("/rules/")
            .then(response => {
                this.setState({
                    styleRules: response.data,
                    numStyleRules: response.data.length
                });
            })
            .catch(error => {
                console.error(error);
            });
    }

    componentDidMount() {
        this.getStyleRules();
    }

    render() {
        return (
            <div>
                <Navbar numStyleRules={this.state.numStyleRules} />
                <div className="container">
                    <Switch>
                        <Route exact path="/" component={StyleChecker} />
                        {/* <Route exact path="/rules" component={Rules} /> */}
                        <Route
                            exact
                            path="/rules"
                            render={props => (
                                <Rules
                                    {...props}
                                    styleRules={this.state.styleRules}
                                />
                            )}
                        />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default App;
