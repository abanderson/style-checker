import React from "react";

const ResultsText = ({ editedText, highlightedText }) => {
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
            {highlightedText.text !== "" ? (
                <p>
                    {highlightedText.preText}
                    <span className="highlighted-text">
                        {highlightedText.text}
                    </span>
                    {highlightedText.postText}
                </p>
            ) : (
                <p>{editedText}</p>
            )}
        </div>
    );
};

export default ResultsText;
