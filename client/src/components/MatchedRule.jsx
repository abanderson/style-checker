import React from "react";

const MatchedRule = ({ matchedRule }) => {
    return (
        <li className="list-group-item">
            <strong>{matchedRule.match[0]}</strong>
            <br />
            {matchedRule.matchedRuleDisplayText}
            <br />
            <small>{matchedRule.matchedRuleSource}</small>
        </li>
    );
};

export default MatchedRule;
