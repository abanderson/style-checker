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
            isEnabled: true,
            validationErrorMessage: "",
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
            isEnabled: true,
            validationErrorMessage: "",
        });
    }

    handleChange(event) {
        const target = event.target;
        const value =
            target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value,
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        let isValid = this.validateForm();

        if (isValid) {
            Axios.post("/rules/", {
                ruleName: this.state.ruleName.trim(),
                searchRegex: this.state.searchRegex,
                displayText: this.state.displayText.trim(),
                correctionRegex: this.state.correctionRegex,
                ruleSource: this.state.ruleSource.trim(),
                isEnabled: this.state.isEnabled,
            })
                .then(() => {
                    this.props.onAddRule();
                    this.resetState();
                    this.props.history.push("/rules");
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    }

    validateForm() {
        let isValid = true;
        let errorMessage = "";

        if (this.state.searchRegex === "") {
            errorMessage = "Search expression cannot be blank";
            isValid = false;
        } else {
            this.props.styleRules.forEach((rule) => {
                if (this.state.searchRegex === rule.searchRegex) {
                    errorMessage =
                        "The search expression already exists in the database.";
                    isValid = false;
                }
            });
        }

        this.setState({
            validationErrorMessage: errorMessage,
        });

        if (!isValid) {
            window.alert(errorMessage);
        }

        return isValid;
    }

    render() {
        return (
            <div className="main-container centered">
                <div className="add-rule-container">
                    <h1 class="margin-left-regular">Add Rule</h1>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-section">
                            <label htmlFor="ruleName">Rule name</label>
                            <input
                                className="form-text-input"
                                type="text"
                                name="ruleName"
                                placeholder="Enter rule name"
                                value={this.state.ruleName}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="form-section">
                            <label htmlFor="searchRegex">
                                Search expression
                            </label>
                            <input
                                className="form-text-input"
                                type="text"
                                name="searchRegex"
                                placeholder="Enter regular expression"
                                value={this.state.searchRegex}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="form-section">
                            <label htmlFor="displayText">Display text</label>
                            <input
                                className="form-text-input"
                                type="text"
                                name="displayText"
                                placeholder="Enter display text"
                                value={this.state.displayText}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="form-section">
                            <label htmlFor="correctionRegex">
                                Correction expression
                            </label>
                            <input
                                className="form-text-input"
                                type="text"
                                name="correctionRegex"
                                placeholder="Enter regular expression "
                                value={this.state.correctionRegex}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="form-section">
                            <label htmlFor="ruleSource">Rule source</label>
                            <input
                                className="form-text-input"
                                type="text"
                                name="ruleSource"
                                placeholder="Enter rule source"
                                value={this.state.ruleSource}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="centered-no-flex">
                            <button type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

AddRule.propTypes = {
    onAddRule: PropTypes.func,
    history: PropTypes.object,
    styleRules: PropTypes.array,
};

export default AddRule;
