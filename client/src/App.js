import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Axios from "axios";
import Navbar from "./components/Navbar";
import StyleChecker from "./components/StyleChecker";
import Rules from "./components/Rules";
import AddRule from "./components/AddRule";
import "./App.css";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            styleRules: [],
            numStyleRules: 0,
        };
    }

    getStyleRules() {
        Axios.get("/rules/")
            .then((response) => {
                this.setState({
                    styleRules: response.data,
                    numStyleRules: response.data.length,
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    componentDidMount() {
        this.getStyleRules();
    }

    deleteStyleRule(ruleId) {
        Axios.delete(`/rules/${ruleId}`)
            .then(() => {
                this.getStyleRules();
            })
            .catch((error) => {
                console.error(error);
            });
    }

    updateStyleRule(ruleId, updates) {
        Axios.put(`/rules/${ruleId}`, updates)
            .then(() => {
                this.getStyleRules();
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        return (
            <div>
                <Navbar numStyleRules={this.state.numStyleRules} />
                <div className="container">
                    <Switch>
                        <Route
                            exact
                            path="/"
                            render={(props) => (
                                <StyleChecker
                                    {...props}
                                    styleRules={this.state.styleRules}
                                />
                            )}
                        />
                        <Route
                            exact
                            path="/rules"
                            render={(props) => (
                                <Rules
                                    {...props}
                                    styleRules={this.state.styleRules}
                                    deleteRule={this.deleteStyleRule.bind(this)}
                                    updateRule={this.updateStyleRule.bind(this)}
                                />
                            )}
                        />

                        <Route
                            exact
                            path="/add-rule"
                            render={(props) => (
                                <AddRule
                                    {...props}
                                    styleRules={this.state.styleRules}
                                    onAddRule={this.getStyleRules.bind(this)}
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
