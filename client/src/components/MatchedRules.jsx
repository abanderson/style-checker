import React from "react";
import MatchedRule from "./MatchedRule";

const MatchedRules = ({ ruleMatches, setHighlightedText }) => {
    const matchedRules = ruleMatches.map((matchedRule, index) => {
        return (
            <MatchedRule
                key={index}
                matchedRule={matchedRule}
                setHighlightedText={setHighlightedText}
            />
        );
    });

    return (
        <div className="correction-list">
            <h5>{ruleMatches.length} matches found</h5>
            <ul className="list-group">{matchedRules}</ul>
        </div>
    );
};

export default MatchedRules;
