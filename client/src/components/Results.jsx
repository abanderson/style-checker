import React from "react";
import ResultsText from "./ResultsText";
import MatchedRules from "./MatchedRules";
import PropTypes from "prop-types";

const Results = ({
    ruleMatches,
    editedText,
    highlightedText,
    setHighlightedText,
    setDismissedRule,
    correctRule,
}) => {
    return (
        <div>
            <div className="row results mt-3 mb-3">
                <div className="col">
                    <MatchedRules
                        ruleMatches={ruleMatches}
                        setHighlightedText={setHighlightedText}
                        setDismissedRule={setDismissedRule}
                        correctRule={correctRule}
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

Results.propTypes = {
    ruleMatches: PropTypes.array,
    editedText: PropTypes.string,
    highlightedText: PropTypes.object,
    setHighlightedText: PropTypes.func,
    setDismissedRule: PropTypes.func,
    correctRule: PropTypes.func,
};

export default Results;
