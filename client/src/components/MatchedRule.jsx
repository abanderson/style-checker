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
        console.log(
            `Mouse over rule: ${this.props.matchedRule.matchedRuleName}`
        );

        this.setState({ className: "list-group-item active" });
        this.props.setHighlightedText(
            `HIGHLIGHTED: ${this.props.matchedRule.matchedRuleDisplayText}`
        );
    }

    handleMouseOut() {
        console.log(
            `Mouse out of rule: ${this.props.matchedRule.matchedRuleName}`
        );

        this.setState({ className: "list-group-item" });
        this.props.setHighlightedText("");
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
