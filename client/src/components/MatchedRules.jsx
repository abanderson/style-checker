import React from "react";
import MatchedRule from "./MatchedRule";

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
            <h5>{displayedRules.length} matches found</h5>
            <ul className="list-group">{displayedRules}</ul>
        </div>
    );
};

export default MatchedRules;
