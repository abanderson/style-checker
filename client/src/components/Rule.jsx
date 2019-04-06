import React from "react";
import PropTypes from "prop-types";

const Rule = ({ rule, ruleNum }) => {
    const options = {
        year: "numeric",
        month: "short",
        day: "numeric"
    };

    const ruleUpdated = new Date(rule.updatedAt).toLocaleString(
        "en-us",
        options
    );

    return (
        <tr>
            <th scope="row">{ruleNum}</th>
            <td>{rule.ruleName}</td>
            <td>{rule.searchRegex}</td>
            <td>{rule.displayText}</td>
            <td>{rule.correctionRegex}</td>
            <td>{rule.ruleSource}</td>
            <td>{rule.isEnabled ? "True" : "False"}</td>
            <td>{ruleUpdated}</td>
            <td className="delete-rule-control">
                <span className="fas fa-times" />
            </td>
        </tr>
    );
};

Rule.propTypes = {
    rule: PropTypes.object,
    ruleNum: PropTypes.number
};

export default Rule;
