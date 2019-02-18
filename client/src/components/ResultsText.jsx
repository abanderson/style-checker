import React from "react";

const ResultsText = ({ editedText }) => {
    return (
        <div>
            <div className="text-markup">
                <div className="d-flex justify-content-between align-items-baseline">
                    <h5 className="d-inline">Results</h5>
                    <span className="mr-2 text-copy">
                        <span className="far fa-copy" />
                        <small className="font-weight-light ml-1">Copy</small>
                    </span>
                </div>
            </div>
            <p>{editedText}</p>
        </div>
    );
};

export default ResultsText;
