import React from "react";
import ResultsText from "./ResultsText";
import MatchedRules from "./MatchedRules";

const Results = () => {
    return (
        <div>
            <div className="row results mb-4">
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
