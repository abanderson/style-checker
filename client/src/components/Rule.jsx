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
            editFormRuleEnabled: true,
        };

        this.handleClickDelete = this.handleClickDelete.bind(this);
        this.handleClickEdit = this.handleClickEdit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeRuleEnabled = this.handleChangeRuleEnabled.bind(this);
    }

    handleClickEdit() {
        this.setState({
            isEditable: !this.state.isEditable,
            ruleName: this.props.rule.ruleName,
            searchRegex: this.props.rule.searchRegex,
            displayText: this.props.rule.displayText,
            correctionRegex: this.props.rule.correctionRegex,
            ruleSource: this.props.rule.ruleSource,
            editFormRuleEnabled: this.props.rule.isEnabled,
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

    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value,
        });
    }

    handleChangeRuleEnabled(event) {
        this.setState({
            editFormRuleEnabled: event.target.value,
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
                    type="checkbox"
                    checked={this.state.editFormRuleEnabled}
                    onChange={this.handleChangeRuleEnabled}
                />
            );
            button1 = (
                <td
                    className="edit-rule-control"
                    onClick={this.handleClickEdit}
                >
                    <span title="Save rule" className="fas fa-check" />
                </td>
            );
            button2 = (
                <td className="delete-rule-control">
                    <span title="Cancel edit" className="far fa-window-close" />
                </td>
            );
        } else {
            ruleName = <span>{this.props.rule.ruleName}</span>;
            searchRegex = <span>{this.props.rule.searchRegex}</span>;
            displayText = <span>{this.props.rule.displayText}</span>;
            correctionRegex = <span>{this.props.rule.correctionRegex}</span>;
            ruleSource = <span>{this.props.rule.ruleSource}</span>;
            ruleEnabled = (
                <span>{this.props.rule.isEnabled ? "True" : "False"}</span>
            );
            button1 = (
                <td
                    className="edit-rule-control"
                    onClick={this.handleClickEdit}
                >
                    <span title="Edit rule" className="far fa-edit" />
                </td>
            );
            button2 = (
                <td
                    className="delete-rule-control"
                    onClick={this.handleClickDelete}
                >
                    <span title="Delete rule" className="fas fa-times" />
                </td>
            );
        }

        return (
            <tr className={this.state.isEditable ? "table-warning" : ""}>
                <th scope="row">{this.props.ruleNum}</th>
                <td>{ruleName}</td>
                <td>{searchRegex}</td>
                <td>{displayText}</td>
                <td>{correctionRegex}</td>
                <td>{ruleSource}</td>
                <td>{ruleEnabled}</td>
                <td>{ruleUpdated}</td>
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
    resetRuleFilter: PropTypes.func,
};

export default Rule;
