import React, { Component } from "react";
import PropTypes from "prop-types";

class ResultsText extends Component {
    constructor(props) {
        super(props);

        this.copyText = this.copyText.bind(this);
    }

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
                <div className="text-markup">
                    <div className="d-flex justify-content-between align-items-baseline">
                        <h5 className="d-inline">Results</h5>
                        <span
                            className="mr-2 text-copy"
                            onClick={this.copyText}
                        >
                            <span className="far fa-copy" />
                            <small className="font-weight-light ml-1">
                                Copy
                            </small>
                        </span>
                    </div>
                </div>
                {this.props.highlightedText.text !== "" ? (
                    <p className="results-text">
                        {this.props.highlightedText.preText}
                        <span className="highlighted-text">
                            {this.props.highlightedText.text}
                        </span>
                        {this.props.highlightedText.postText}
                    </p>
                ) : (
                    <p className="results-text">{this.props.editedText}</p>
                )}
            </div>
        );
    }
}

ResultsText.propTypes = {
    editedText: PropTypes.string,
    highlightedText: PropTypes.object
};

export default ResultsText;
