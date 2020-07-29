import React from "react";
import ResultsText from "./ResultsText";
import Stats from "./Stats";
import PropTypes from "prop-types";

const Results = ({ editedText, highlightedText }) => {
    return (
        <div className="results-container">
            <ResultsText
                editedText={editedText}
                highlightedText={highlightedText}
            />
            <Stats editedText={editedText} />
        </div>
    );
};

Results.propTypes = {
    editedText: PropTypes.string,
    highlightedText: PropTypes.object,
};

export default Results;
