import React from "react";

const Rule = ({ rule, ruleNum }) => {
    const options = {
        year: "numeric",
        month: "short",
        day: "numeric"
    };
    const ruleCreated = new Date(rule.createdAt).toLocaleString(
        "en-us",
        options
    );
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
            <td>{rule.correctionAvailable ? "True" : "False"}</td>
            <td>{rule.correctionRegex}</td>
            <td>{rule.ruleSource}</td>
            <td>{rule.isEnabled ? "True" : "False"}</td>
            <td>{ruleCreated}</td>
            <td>{ruleUpdated}</td>
        </tr>
    );
};

export default Rule;
