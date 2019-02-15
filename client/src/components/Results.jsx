import React from "react";
import ResultsText from "./ResultsText";
import MatchedRules from "./MatchedRules";

const Results = () => {
    return (
        <div>
            <div className="row results mt-3 mb-3">
                <div className="col">
                    <ResultsText />
                </div>
                <div className="col">
                    <MatchedRules />
                </div>
            </div>
        </div>
    );
};

export default Results;
