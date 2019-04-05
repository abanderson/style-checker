import React, { Component } from "react";
import Axios from "axios";
import PropTypes from "prop-types";

class AddRule extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ruleName: "",
            searchRegex: "",
            displayText: "",
            correctionRegex: "",
            ruleSource: "",
            isEnabled: true
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    resetState() {
        this.setState({
            ruleName: "",
            searchRegex: "",
            displayText: "",
            correctionRegex: "",
            ruleSource: "",
            isEnabled: true
        });
    }

    handleChange(event) {
        const target = event.target;
        const value =
            target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        let isValid = this.validateForm();

        if (isValid) {
            Axios.post("http://localhost:3001/rules/", {
                ruleName: this.state.ruleName,
                searchRegex: this.state.searchRegex,
                displayText: this.state.displayText,
                correctionRegex: this.state.correctionRegex,
                ruleSource: this.state.ruleSource,
                isEnabled: this.state.isEnabled
            })
                .then(() => {
                    this.props.onAddRule();
                    this.resetState();
                    document.getElementsByClassName(
                        "searchRegexInfo"
                    )[0].innerHTML = "";
                    this.props.history.push("/rules");
                })
                .catch(error => {
                    console.error(error);
                });
        }
    }

    validateForm() {
        let isValid = true;

        if (this.state.searchRegex === "") {
            document.getElementsByClassName("searchRegexInfo")[0].innerHTML =
                "Field cannot be blank";
            isValid = false;
        } else {
            this.props.styleRules.forEach(rule => {
                if (this.state.searchRegex === rule.searchRegex) {
                    document.getElementsByClassName(
                        "searchRegexInfo"
                    )[0].innerHTML =
                        "This expression already exists in the database.";
                    isValid = false;
                }
            });
        }

        return isValid;
    }

    render() {
        return (
            <div className="row mt-3 mb-3 justify-content-center">
                <div className="col-lg-8">
                    <h3>Add Rule</h3>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="ruleName">Rule name</label>
                            <input
                                name="ruleName"
                                type="text"
                                className="form-control"
                                id="ruleName"
                                placeholder="Enter rule name"
                                value={this.state.ruleName}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="searchRegex">
                                Search expression
                            </label>
                            <input
                                name="searchRegex"
                                type="text"
                                className="form-control"
                                id="searchRegex"
                                placeholder="Enter regular expression"
                                value={this.state.searchRegex}
                                onChange={this.handleChange}
                            />
                            <small className="searchRegexInfo text-danger" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="displayText">Display text</label>
                            <input
                                name="displayText"
                                type="text"
                                className="form-control"
                                id="displayText"
                                placeholder="Enter display text"
                                value={this.state.displayText}
                                onChange={this.handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="correctionRegex">
                                Correction expression
                            </label>
                            <input
                                name="correctionRegex"
                                type="text"
                                className="form-control"
                                id="correctionRegex"
                                placeholder="Enter regular expression"
                                value={this.state.correctionRegex}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="ruleSource">Rule source</label>
                            <input
                                name="ruleSource"
                                type="text"
                                className="form-control"
                                id="ruleSource"
                                placeholder="Enter rule source"
                                value={this.state.ruleSource}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="form-group form-check">
                            <input
                                name="isEnabled"
                                type="checkbox"
                                className="form-check-input"
                                id="isEnabled"
                                checked={this.state.isEnabled}
                                onChange={this.handleChange}
                            />
                            <label
                                className="form-check-label"
                                htmlFor="isEnabled"
                            >
                                Rule enabled?
                            </label>
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}

AddRule.propTypes = {
    onAddRule: PropTypes.func,
    history: PropTypes.object,
    styleRules: PropTypes.array
};

export default AddRule;
