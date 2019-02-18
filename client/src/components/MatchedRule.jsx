import React, { Component } from "react";

class MatchedRule extends Component {
    constructor(props) {
        super(props);

        this.handleMouseOver = this.handleMouseOver.bind(this);
        this.handleMouseOut = this.handleMouseOut.bind(this);
    }

    handleMouseOver() {
        console.log(
            `Mouse over rule: ${this.props.matchedRule.matchedRuleName}`
        );
        //  Don't do this: console.log(this.props.key);
    }

    handleMouseOut() {
        console.log(
            `Mouse out of rule: ${this.props.matchedRule.matchedRuleName}`
        );
    }

    render() {
        return (
            <li
                className="list-group-item"
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
