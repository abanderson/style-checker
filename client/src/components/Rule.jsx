import React from "react";
import PropTypes from "prop-types";

const Rule = ({ rule, ruleNum, deleteRule, resetRuleFilter }) => {
    const options = {
        year: "numeric",
        month: "short",
        day: "numeric"
    };

    const ruleUpdated = new Date(rule.updatedAt).toLocaleString(
        "en-us",
        options
    );

    const handleClick = () => {
        const response = window.confirm(`Delete rule "${rule.ruleName}"?`);
        if (response) {
            deleteRule(rule.id);
            resetRuleFilter();
        }
    };

    return (
        <tr>
            <th scope="row">{ruleNum}</th>
            <td contenteditable="true">{rule.ruleName}</td>
            <td contenteditable="true">{rule.searchRegex}</td>
            <td>{rule.displayText}</td>
            <td>{rule.correctionRegex}</td>
            <td>{rule.ruleSource}</td>
            <td>{rule.isEnabled ? "True" : "False"}</td>
            <td>{ruleUpdated}</td>
            <td className="delete-rule-control" onClick={handleClick}>
                <span className="fas fa-times" />
            </td>
        </tr>
    );
};

Rule.propTypes = {
    rule: PropTypes.object,
    ruleNum: PropTypes.number,
    deleteRule: PropTypes.func,
    resetRuleFilter: PropTypes.func
};

export default Rule;
