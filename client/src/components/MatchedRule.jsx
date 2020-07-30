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
            correctControlStyle = "rule-match-control no-display";
        } else {
            correctControlStyle = "rule-match-control";
        }

        return (
            <div
                className="rule-match"
                onMouseOver={this.handleMouseOver}
                onMouseOut={this.handleMouseOut}
            >
                <div className="rule-match-info">
                    <div className="rule-match-heading">
                        {this.props.matchedRule.match[0]}
                    </div>
                    <div
                        className="rule-match-content"
                        dangerouslySetInnerHTML={{
                            __html: this.props.matchedRule
                                .matchedRuleDisplayText,
                        }}
                    ></div>
                    <div className="rule-match-source">
                        {this.props.matchedRule.matchedRuleSource}
                    </div>
                </div>
                <div
                    className={correctControlStyle}
                    onClick={this.handleClickCorrect}
                >
                    <svg
                        width="1.75rem"
                        height="1.75rem"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z"
                        />
                    </svg>
                </div>
            </div>
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
