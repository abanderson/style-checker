import React, { Component } from "react";
import PropTypes from "prop-types";

class Rule extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isEditable: false,
            editFormRuleName: "",
            editFormSearchRegex: "",
            editFormDisplayText: "",
            editFormCorrectionRegex: "",
            editFormRuleSource: "",
            editFormRuleEnabled: true,
        };

        this.handleClickDelete = this.handleClickDelete.bind(this);
        this.handleClickEdit = this.handleClickEdit.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeSearchRegex = this.handleChangeSearchRegex.bind(this);
        this.handleChangeDisplayText = this.handleChangeDisplayText.bind(this);
        this.handleChangeCorrectionRegex = this.handleChangeCorrectionRegex.bind(
            this
        );
        this.handleChangeRuleSource = this.handleChangeRuleSource.bind(this);
        this.handleChangeRuleEnabled = this.handleChangeRuleEnabled.bind(this);
    }

    handleClickEdit() {
        this.setState({
            isEditable: !this.state.isEditable,
            editFormRuleName: this.props.rule.ruleName,
            editFormSearchRegex: this.props.rule.searchRegex,
            editFormDisplayText: this.props.rule.displayText,
            editFormCorrectionRegex: this.props.rule.correctionRegex,
            editFormRuleSource: this.props.rule.ruleSource,
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

    handleChangeName(event) {
        this.setState({
            editFormRuleName: event.target.value,
        });
    }

    handleChangeSearchRegex(event) {
        this.setState({
            editFormSearchRegex: event.target.value,
        });
    }

    handleChangeDisplayText(event) {
        this.setState({
            editFormDisplayText: event.target.value,
        });
    }
    handleChangeCorrectionRegex(event) {
        this.setState({
            editFormCorrectionRegex: event.target.value,
        });
    }
    handleChangeRuleSource(event) {
        this.setState({
            editFormRuleSource: event.target.value,
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

        let name;
        let searchRegex;
        let displayText;
        let ruleEnabled;
        let button1;
        let button2;

        if (this.state.isEditable) {
            name = (
                <input
                    value={this.state.editFormRuleName}
                    onChange={this.handleChangeName}
                />
            );
            searchRegex = (
                <input
                    value={this.state.editFormSearchRegex}
                    onChange={this.handleChangeSearchRegex}
                />
            );
            displayText = (
                <input
                    value={this.state.editFormDisplayText}
                    onChange={this.handleChangeDisplayText}
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
            name = <span>{this.props.rule.ruleName}</span>;
            searchRegex = <span>{this.props.rule.searchRegex}</span>;
            displayText = <span>{this.props.rule.displayText}</span>;
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
                <td>{name}</td>
                <td>{searchRegex}</td>
                <td>{displayText}</td>
                <td>{this.props.rule.correctionRegex}</td>
                <td>{this.props.rule.ruleSource}</td>
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
