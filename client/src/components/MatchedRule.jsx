import React, { Component } from "react";
import PropTypes from "prop-types";

class MatchedRule extends Component {
    constructor(props) {
        super(props);

        this.state = {
            className: "list-group-item pr-0",
            isDismissed: false,
        };

        this.handleMouseOver = this.handleMouseOver.bind(this);
        this.handleMouseOut = this.handleMouseOut.bind(this);
        this.handleClickDismiss = this.handleClickDismiss.bind(this);
        this.handleClickCorrect = this.handleClickCorrect.bind(this);
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
            postText: postText,
        });
    }

    handleMouseOut() {
        // this.setState({ className: "list-group-item pr-0" });
        this.props.setHighlightedText({
            preText: "",
            text: "",
            postText: "",
        });
    }

    handleClickDismiss() {
        this.props.setDismissedRule(this.props.dataId);
    }

    handleClickCorrect() {
        this.props.correctRule(this.props.dataId);
    }

    render() {
        let correctControlStyle = "";

        if (!this.props.matchedRule.matchedRuleCorrectionText) {
            correctControlStyle = "matched-rule-control no-display";
        } else {
            correctControlStyle = "matched-rule-control";
        }

        return (
            <li
                className={this.state.className}
                onMouseOver={this.handleMouseOver}
                onMouseOut={this.handleMouseOut}
            >
                <div className="matched-rule">
                    <div className="matched-rule-info">
                        <strong>{this.props.matchedRule.match[0]}</strong>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: this.props.matchedRule
                                    .matchedRuleDisplayText,
                            }}
                        ></div>
                        <small>
                            {this.props.matchedRule.matchedRuleSource}
                        </small>
                    </div>
                    <div className="matched-rule-controls">
                        <div
                            className={correctControlStyle}
                            onClick={this.handleClickCorrect}
                        >
                            <span className="fas fa-check" />
                        </div>
                    </div>
                </div>
            </li>
        );
    }
}

MatchedRule.propTypes = {
    matchedRule: PropTypes.object,
    setHighlightedText: PropTypes.func,
    setDismissedRule: PropTypes.func,
    dataId: PropTypes.number,
    correctRule: PropTypes.func,
};

export default MatchedRule;
