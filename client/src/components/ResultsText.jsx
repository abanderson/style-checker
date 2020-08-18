import React, { Component } from "react";
import PropTypes from "prop-types";

class ResultsText extends Component {
    copyText() {
        let textToCopy = document.getElementsByClassName("results-text")[0]
            .innerHTML;

        let el = document.createElement("textarea");
        el.value = textToCopy;
        document.body.appendChild(el);
        el.select();
        document.execCommand("copy");
        document.body.removeChild(el);
    }

    render() {
        return (
            <div>
                <div className="header-container">
                    <h1>Results Text</h1>
                    <div
                        className="clear-copy-control"
                        title="Copy text"
                        onClick={this.copyText}
                    >
                        <svg
                            width="1em"
                            height="1em"
                            viewBox="0 0 16 16"
                            fill="#115937"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"
                            />
                            <path
                                fill-rule="evenodd"
                                d="M9.5 1h-3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3zM8 7a.5.5 0 0 1 .5.5V9H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V10H6a.5.5 0 0 1 0-1h1.5V7.5A.5.5 0 0 1 8 7z"
                            />
                        </svg>
                    </div>
                </div>
                <div className="results">
                    {this.props.highlightedText.text !== "" ? (
                        <pre className="results-text">
                            {this.props.highlightedText.preText}
                            <mark>{this.props.highlightedText.text}</mark>
                            {this.props.highlightedText.postText}
                        </pre>
                    ) : (
                        <pre className="results-text">
                            {this.props.editedText}
                        </pre>
                    )}
                </div>
            </div>
        );
    }
}

ResultsText.propTypes = {
    editedText: PropTypes.string,
    highlightedText: PropTypes.object,
};

export default ResultsText;
