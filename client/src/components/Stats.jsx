import React from "react";
import PropTypes from "prop-types";

const Stats = ({ editedText }) => {
    const charCount = editedText.length;
    const charCountNoSpaces = editedText.replaceAll(" ", "").length;
    const re = /[ -]./;
    let wordCount;

    if (editedText === "") {
        wordCount = 0;
    } else {
        wordCount = editedText.split(re).length;
    }

    return (
        <div className="stats-container">
            <div className="stats">Words: {wordCount}</div>
            <div className="stats">Chars: {charCount}</div>
            <div className="stats">Chars (no spaces): {charCountNoSpaces}</div>
        </div>
    );
};

Stats.propTypes = {
    editedText: PropTypes.string,
};

export default Stats;
