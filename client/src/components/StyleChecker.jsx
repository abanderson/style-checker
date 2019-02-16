import React, { Component } from "react";
import SourceText from "./SourceText";
import Results from "./Results";

class StyleChecker extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ruleMatches: []
        };

        this.checkStyle = this.checkStyle.bind(this);
    }

    checkStyle(sourceText) {
        console.clear();
        this.setState({
            ruleMatches: []
        });
        let matches = [];

        this.props.styleRules.forEach(rule => {
            if (rule.isEnabled) {
                let re = new RegExp(rule.searchRegex, "g");
                let match;

                while ((match = re.exec(sourceText))) {
                    console.log(`Found ${match[0]} at ${match.index}`);
                    matches.push({
                        match: [...match],
                        index: match.index,
                        input: match.input,
                        length: match.length,
                        matchedRuleName: rule.ruleName,
                        matchedRuleDisplayText: rule.displayText,
                        matchedRuleSource: rule.ruleSource
                    });
                }
            }
        });
        this.setState({
            ruleMatches: matches
        });
    }

    render() {
        return (
            <div className="row mt-3 mb-3 text-entry">
                <div className="col">
                    <SourceText onTextInput={this.checkStyle} />
                    <Results ruleMatches={this.state.ruleMatches} />
                </div>
            </div>
        );
    }
}

export default StyleChecker;
