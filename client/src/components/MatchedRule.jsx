import React, { Component } from "react";

class MatchedRule extends Component {
    constructor(props) {
        super(props);

        this.state = {
            className: "list-group-item"
        };

        this.handleMouseOver = this.handleMouseOver.bind(this);
        this.handleMouseOut = this.handleMouseOut.bind(this);
    }

    handleMouseOver() {
        let preText = this.props.matchedRule.input.slice(
            0,
            this.props.matchedRule.index
        );
        let postText = this.props.matchedRule.input.slice(
            this.props.matchedRule.index +
                this.props.matchedRule.match[0].length,
            this.props.matchedRule.input.length
        );

        this.setState({ className: "list-group-item active" });
        this.props.setHighlightedText({
            preText: preText,
            text: this.props.matchedRule.match[0],
            postText: postText
        });
    }

    handleMouseOut() {
        this.setState({ className: "list-group-item" });
        this.props.setHighlightedText({
            preText: "",
            text: "",
            postText: ""
        });
    }

    render() {
        return (
            <li
                className={this.state.className}
                onMouseOver={this.handleMouseOver}
                onMouseOut={this.handleMouseOut}
            >
                <strong>{this.props.matchedRule.match[0]}</strong>
                <br />
                {this.props.matchedRule.matchedRuleDisplayText}
                <br />
                <small>{this.props.matchedRule.matchedRuleSource}</small>
            </li>
        );
    }
}

export default MatchedRule;
