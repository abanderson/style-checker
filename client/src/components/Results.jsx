import React from "react";
import ResultsText from "./ResultsText";
import MatchedRules from "./MatchedRules";

const Results = ({
    ruleMatches,
    editedText,
    highlightedText,
    setHighlightedText,
    setDismissedRule
}) => {
    return (
        <div>
            <div className="row results mt-3 mb-3">
                <div className="col">
                    <MatchedRules
                        ruleMatches={ruleMatches}
                        setHighlightedText={setHighlightedText}
                        setDismissedRule={setDismissedRule}
                    />
                </div>
                <div className="col">
                    <ResultsText
                        editedText={editedText}
                        highlightedText={highlightedText}
                    />
                </div>
            </div>
        </div>
    );
};

export default Results;
