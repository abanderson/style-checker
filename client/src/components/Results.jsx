import React from "react";
import ResultsText from "./ResultsText";
import MatchedRules from "./MatchedRules";

const Results = ({
    ruleMatches,
    editedText,
    highlightedText,
    setHighlightedText
}) => {
    return (
        <div>
            <div className="row results mt-3 mb-3">
                <div className="col">
                    <MatchedRules
                        ruleMatches={ruleMatches}
                        setHighlightedText={setHighlightedText}
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
