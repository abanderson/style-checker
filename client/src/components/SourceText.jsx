import React, { Component } from "react";
import PropTypes from "prop-types";

class SourceText extends Component {
    constructor(props) {
        super(props);

        this.state = {
            sourceText: "",
        };

        this.handleChange = this.handleChange.bind(this);
        this.clearText = this.clearText.bind(this);
    }

    handleChange(event) {
        this.setState({
            sourceText: event.target.value,
        });
        this.props.onTextInput(event.target.value);
    }

    clearText() {
        this.setState({
            sourceText: "",
        });
        this.props.onTextInput("");
        document.getElementsByClassName("source-text")[0].focus();
    }

    render() {
        return (
            <div className="source-container">
                <div className="header-container">
                    <h1>Source Text</h1>
                    <div
                        className="clear-copy-control"
                        title="Delete text"
                        onClick={this.clearText}
                    >
                        <svg
                            width="1em"
                            height="1em"
                            viewBox="0 0 16 16"
                            fill="#115937"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                            <path
                                fill-rule="evenodd"
                                d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                            />
                        </svg>
                    </div>
                </div>
                <textarea
                    name=""
                    rows="6"
                    className="source-text"
                    placeholder="Enter text to check..."
                    autoFocus={true}
                    value={this.state.sourceText}
                    onChange={this.handleChange}
                ></textarea>
            </div>
        );
    }
}

SourceText.propTypes = {
    onTextInput: PropTypes.func,
};

export default SourceText;
