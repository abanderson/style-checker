import React from "react";
import SourceText from "./SourceText";
import Results from "./Results";

const StyleChecker = () => {
    return (
        <div className="row mt-3 mb-3 text-entry">
            <div className="col">
                <SourceText />
                <Results />
            </div>
        </div>
    );
};

export default StyleChecker;
