import React from "react";
import MatchedRule from "./MatchedRule";
import PropTypes from "prop-types";

const MatchedRules = ({
    ruleMatches,
    setHighlightedText,
    setDismissedRule,
    correctRule
}) => {
    const displayedRules = ruleMatches
        .filter(match => match.isDisplayed)
        .map((rule, index) => {
            return (
                <MatchedRule
                    key={index}
                    dataId={rule.id}
                    matchedRule={rule}
                    setHighlightedText={setHighlightedText}
                    setDismissedRule={setDismissedRule}
                    correctRule={correctRule}
                />
            );
        });

    return (
        <div className="correction-list">
            <h5>
                {displayedRules.length}{" "}
                {displayedRules.length === 1 ? "match" : "matches"}
                {" found"}
            </h5>
            <ul className="list-group">{displayedRules}</ul>
        </div>
    );
};

MatchedRules.propTypes = {
    ruleMatches: PropTypes.array,
    setHighlightedText: PropTypes.func,
    setDismissedRule: PropTypes.func,
    correctRule: PropTypes.func
};

export default MatchedRules;
