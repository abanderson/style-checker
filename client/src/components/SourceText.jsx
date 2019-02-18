import React, { Component } from "react";

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
                    rows="3"
                    autoFocus={true}
                    value={this.state.sourceText}
                    onChange={this.handleChange}
                />
            </div>
        );
    }
}

export default SourceText;
