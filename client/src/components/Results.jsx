import React from "react";
import ResultsText from "./ResultsText";
import MatchedRules from "./MatchedRules";

const Results = ({ ruleMatches, editedText, setHighlightedText }) => {
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
                    <ResultsText editedText={editedText} />
                </div>
            </div>
        </div>
    );
};

export default Results;
