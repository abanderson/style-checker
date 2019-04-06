import React, { Component } from "react";
import PropTypes from "prop-types";

class SourceText extends Component {
    constructor(props) {
        super(props);

        this.state = {
            sourceText: ""
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            sourceText: event.target.value
        });
        this.props.onTextInput(event.target.value);
    }

    render() {
        return (
            <div>
                <textarea
                    className="form-control"
                    placeholder="Enter text to check"
                    id="exampleFormControlTextarea1"
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
