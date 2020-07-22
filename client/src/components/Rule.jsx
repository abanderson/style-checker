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
                <td
                    className="edit-rule-control"
                    onClick={this.handleClickEditSave}
                >
                    <span title="Save rule" className="fas fa-check" />
                </td>
            );
            button2 = (
                <td
                    className="delete-rule-control"
                    onClick={this.handleClickEdit}
                >
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
                <td className="table-col-name">{ruleName}</td>
                <td className="table-col-search">{searchRegex}</td>
                <td className="table-col-details">{displayText}</td>
                <td className="table-col-correction">{correctionRegex}</td>
                <td className="table-col-source">{ruleSource}</td>
                <td className="table-col-enabled">{ruleEnabled}</td>
                <td className="table-col-updated">{ruleUpdated}</td>
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
