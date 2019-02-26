import React, { Component } from "react";

class MatchedRule extends Component {
    constructor(props) {
        super(props);

        this.state = {
            className: "list-group-item pr-0",
            isDismissed: false
        };

        this.handleMouseOver = this.handleMouseOver.bind(this);
        this.handleMouseOut = this.handleMouseOut.bind(this);
        this.handleClickDismiss = this.handleClickDismiss.bind(this);
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

        // this.setState({ className: "list-group-item active pr-0" });
        this.props.setHighlightedText({
            preText: preText,
            text: this.props.matchedRule.match[0],
            postText: postText
        });
    }

    handleMouseOut() {
        // this.setState({ className: "list-group-item pr-0" });
        this.props.setHighlightedText({
            preText: "",
            text: "",
            postText: ""
        });
    }

    handleClickDismiss() {
        this.props.setDismissedRule(this.props.dataId);
    }

    render() {
        return (
            <li
                className={this.state.className}
                onMouseOver={this.handleMouseOver}
                onMouseOut={this.handleMouseOut}
            >
                <div className="matched-rule">
                    <div className="matched-rule-info">
                        <strong>{this.props.matchedRule.match[0]}</strong>
                        <br />
                        {this.props.matchedRule.matchedRuleDisplayText}
                        <br />
                        <small>
                            {this.props.matchedRule.matchedRuleSource}
                        </small>
                    </div>
                    <div className="matched-rule-controls">
                        <div
                            className="matched-rule-control"
                            onClick={this.handleClickDismiss}
                        >
                            <span className="fas fa-times" />
                        </div>
                        <div className="matched-rule-control">
                            <span className="fas fa-check" />
                        </div>
                    </div>
                </div>
            </li>
        );
    }
}

export default MatchedRule;
