import React, { Component } from "react";
import PropTypes from "prop-types";

class Rule extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isEditable: false,
            ruleName: "",
            searchRegex: "",
            displayText: "",
            correctionRegex: "",
            ruleSource: "",
            ruleEnabled: true,
            ruleNameFocusSet: false,
        };

        this.handleClickDelete = this.handleClickDelete.bind(this);
        this.handleClickEdit = this.handleClickEdit.bind(this);
        this.handleClickEditSave = this.handleClickEditSave.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidUpdate() {
        if (this.state.isEditable && this.state.ruleNameFocusSet) {
            document.getElementById(this.props.ruleNum).focus();
            this.setState({
                ruleNameFocusSet: false,
            });
        }
    }

    handleClickEdit() {
        this.setState({
            isEditable: !this.state.isEditable,
            ruleName: this.props.rule.ruleName,
            searchRegex: this.props.rule.searchRegex,
            displayText: this.props.rule.displayText,
            correctionRegex: this.props.rule.correctionRegex,
            ruleSource: this.props.rule.ruleSource,
            ruleEnabled: this.props.rule.isEnabled,
            ruleNameFocusSet: true,
        });
    }

    handleClickDelete() {
        const response = window.confirm(
            `Delete rule "${this.props.rule.ruleName}"?`
        );
        if (response) {
            this.props.deleteRule(this.props.rule.id);
            this.props.resetRuleFilter();
        }
    }

    handleClickEditSave() {
        const updates = {
            ruleId: this.props.rule.id,
            ruleName: this.state.ruleName,
            searchRegex: this.state.searchRegex,
            displayText: this.state.displayText,
            correctionRegex: this.state.correctionRegex,
            ruleSource: this.state.ruleSource,
            isEnabled: this.state.ruleEnabled,
            ruleNameFocusSet: false,
        };

        let isValid = this.props.isValidRule(updates);

        if (isValid) {
            this.props.updateRule(this.props.rule.id, updates);

            this.setState({
                isEditable: false,
            });
        }
    }

    handleChange(event) {
        const name = event.target.name;
        const value =
            event.target.type === "checkbox"
                ? event.target.checked
                : event.target.value;
        this.setState({
            [name]: value,
        });
    }

    render() {
        const options = {
            year: "numeric",
            month: "short",
            day: "numeric",
        };

        const ruleUpdated = new Date(this.props.rule.updatedAt).toLocaleString(
            "en-us",
            options
        );

        const ruleEnabledButton = (
            <svg
                width="1.5rem"
                height="1.5rem"
                viewBox="0 0 16 16"
                fill="#115937"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fill-rule="evenodd"
                    d="M5 3a5 5 0 0 0 0 10h6a5 5 0 0 0 0-10H5zm6 9a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"
                />
            </svg>
        );

        const ruleDisabledButton = (
            <svg
                width="1.5rem"
                height="1.5rem"
                viewBox="0 0 16 16"
                fill="#115937"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fill-rule="evenodd"
                    d="M11 4a4 4 0 0 1 0 8H8a4.992 4.992 0 0 0 2-4 4.992 4.992 0 0 0-2-4h3zm-6 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zM0 8a5 5 0 0 0 5 5h6a5 5 0 0 0 0-10H5a5 5 0 0 0-5 5z"
                />
            </svg>
        );

        let ruleName;
        let searchRegex;
        let displayText;
        let ruleEnabled;
        let correctionRegex;
        let ruleSource;
        let button1;
        let button2;

        if (this.state.isEditable) {
            ruleName = (
                <input
                    name="ruleName"
                    id={this.props.ruleNum}
                    value={this.state.ruleName}
                    onChange={this.handleChange}
                />
            );
            searchRegex = (
                <input
                    name="searchRegex"
                    value={this.state.searchRegex}
                    onChange={this.handleChange}
                />
            );
            displayText = (
                <input
                    name="displayText"
                    value={this.state.displayText}
                    onChange={this.handleChange}
                />
            );
            correctionRegex = (
                <input
                    name="correctionRegex"
                    value={this.state.correctionRegex}
                    onChange={this.handleChange}
                />
            );
            ruleSource = (
                <input
                    name="ruleSource"
                    value={this.state.ruleSource}
                    onChange={this.handleChange}
                />
            );
            ruleEnabled = (
                <input
                    name="ruleEnabled"
                    type="checkbox"
                    checked={this.state.ruleEnabled}
                    onChange={this.handleChange}
                />
            );
            button1 = (
                <td className="table-icon" onClick={this.handleClickEditSave}>
                    <span title="Save rule">
                        <svg
                            width="1.5rem"
                            height="1.5rem"
                            viewBox="0 0 16 16"
                            fill="#115937"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z"
                            />
                        </svg>
                    </span>
                </td>
            );
            button2 = (
                <td className="table-icon" onClick={this.handleClickEdit}>
                    <span title="Cancel edit">
                        <svg
                            width="1.5rem"
                            height="1.5rem"
                            viewBox="0 0 16 16"
                            fill="#115937"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"
                            />
                            <path
                                fill-rule="evenodd"
                                d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"
                            />
                        </svg>
                    </span>
                </td>
            );
        } else {
            ruleName = <span>{this.props.rule.ruleName}</span>;
            searchRegex = <span>{this.props.rule.searchRegex}</span>;
            displayText = <span>{this.props.rule.displayText}</span>;
            correctionRegex = <span>{this.props.rule.correctionRegex}</span>;
            ruleSource = <span>{this.props.rule.ruleSource}</span>;
            ruleEnabled = (
                // <span>{this.props.rule.isEnabled ? "True" : "False"}</span>
                <span>
                    {this.props.rule.isEnabled
                        ? ruleEnabledButton
                        : ruleDisabledButton}
                </span>
            );
            button1 = (
                <td className="table-icon" onClick={this.handleClickEdit}>
                    <span title="Edit rule">
                        <svg
                            width="1rem"
                            height="1rem"
                            viewBox="0 0 16 16"
                            fill="#115937"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M11.293 1.293a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1 0 1.414l-9 9a1 1 0 0 1-.39.242l-3 1a1 1 0 0 1-1.266-1.265l1-3a1 1 0 0 1 .242-.391l9-9zM12 2l2 2-9 9-3 1 1-3 9-9z"
                            />
                            <path
                                fill-rule="evenodd"
                                d="M12.146 6.354l-2.5-2.5.708-.708 2.5 2.5-.707.708zM3 10v.5a.5.5 0 0 0 .5.5H4v.5a.5.5 0 0 0 .5.5H5v.5a.5.5 0 0 0 .5.5H6v-1.5a.5.5 0 0 0-.5-.5H5v-.5a.5.5 0 0 0-.5-.5H3z"
                            />
                        </svg>
                    </span>
                </td>
            );
            button2 = (
                <td className="table-icon" onClick={this.handleClickDelete}>
                    <span title="Delete rule">
                        <svg
                            width="1rem"
                            height="1rem"
                            viewBox="0 0 16 16"
                            fill="#115937"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                            <path
                                fill-rule="evenodd"
                                d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                            />
                        </svg>
                    </span>
                </td>
            );
        }

        return (
            <tr className={this.state.isEditable ? "table-edit" : ""}>
                <td className="table-number">{this.props.ruleNum}</td>
                <td>{ruleName}</td>
                <td>{searchRegex}</td>
                <td>{displayText}</td>
                <td>{correctionRegex}</td>
                <td className="table-rule-source">{ruleSource}</td>
                <td className="table-icon">{ruleEnabled}</td>
                <td className="table-rule-updated">{ruleUpdated}</td>
                {button1}
                {button2}
            </tr>
        );
    }
}

Rule.propTypes = {
    rule: PropTypes.object,
    ruleNum: PropTypes.number,
    deleteRule: PropTypes.func,
    updateRule: PropTypes.func,
    resetRuleFilter: PropTypes.func,
};

export default Rule;
