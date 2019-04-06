import React, { Component } from "react";
import PropTypes from "prop-types";

class SourceText extends Component {
    constructor(props) {
        super(props);

        this.state = {
            sourceText: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.clearText = this.clearText.bind(this);
    }

    handleChange(event) {
        this.setState({
            sourceText: event.target.value
        });
        this.props.onTextInput(event.target.value);
    }

    clearText() {
        this.setState({
            sourceText: ""
        });
        this.props.onTextInput("");
        document.getElementsByClassName("form-control")[0].focus();
    }

    render() {
        return (
            <div>
                <div className="d-flex justify-content-end mb-1">
                    <span className="mr-2 text-clear" onClick={this.clearText}>
                        <span className="far fa-eraser" />
                        <small className="font-weight-light ml-1">Clear</small>
                    </span>
                </div>
                <textarea
                    className="form-control"
                    placeholder="Enter text to check"
                    rows="4"
                    autoFocus={true}
                    value={this.state.sourceText}
                    onChange={this.handleChange}
                />
            </div>
        );
    }
}

SourceText.propTypes = {
    onTextInput: PropTypes.func
};

export default SourceText;
