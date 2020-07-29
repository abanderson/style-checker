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
                this.filterStyleRulesForSafari();
            })
            .catch((error) => {
                console.error(error);
            });
    }

    componentDidMount() {
        this.getStyleRules();
        // this.filterStyleRulesForSafari();
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

    filterStyleRulesForSafari() {
        if (navigator.userAgent.indexOf("Safari") !== -1) {
            console.log(
                "Safari detected. Filtering unsupported style rules..."
            );
            const filteredRules = this.state.styleRules.filter((rule) => {
                return !(
                    rule.searchRegex.includes("(?<!") ||
                    rule.searchRegex.includes("(?<=")
                );
            });
            console.log(
                `Filtered ${
                    this.state.styleRules.length - filteredRules.length
                } rules.`
            );
            this.setState({
                styleRules: filteredRules,
                numStyleRules: filteredRules.length,
            });
        }
    }

    render() {
        return (
            <div className="content-wrapper">
                <Navbar numStyleRules={this.state.numStyleRules} />
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
        );
    }
}

export default App;
