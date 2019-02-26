import React, { Component } from "react";
import SourceText from "./SourceText";
import Results from "./Results";

class StyleChecker extends Component {
    constructor(props) {
        super(props);

        this.state = {
            editedText: "",
            highlightedText: {
                preText: "",
                text: "",
                postText: ""
            },
            ruleMatches: []
        };

        this.handleTextInput = this.handleTextInput.bind(this);
        this.handleHighlightedText = this.handleHighlightedText.bind(this);
        this.handleDismissRule = this.handleDismissRule.bind(this);
        this.checkStyle = this.checkStyle.bind(this);
    }

    handleTextInput(textInput) {
        this.setState({
            editedText: textInput
        });

        this.checkStyle(textInput);
    }

    handleHighlightedText(highlightedText) {
        this.setState({
            highlightedText: {
                preText: highlightedText.preText,
                text: highlightedText.text,
                postText: highlightedText.postText
            }
        });
    }

    handleDismissRule(indexToDismiss) {
        const newRuleMatches = this.state.ruleMatches.map(
            (ruleMatch, index) => {
                if (index === indexToDismiss) {
                    return {
                        id: ruleMatch.id,
                        match: ruleMatch.match,
                        index: ruleMatch.index,
                        input: ruleMatch.input,
                        length: ruleMatch.length,
                        matchedRuleName: ruleMatch.ruleName,
                        matchedRuleDisplayText:
                            ruleMatch.matchedRuleDisplayText,
                        matchedRuleSource: ruleMatch.matchedRuleSource,
                        isDisplayed: false
                    };
                } else {
                    return ruleMatch;
                }
            }
        );
        this.setState({
            highlightedText: {
                preText: "",
                text: "",
                postText: ""
            },
            ruleMatches: newRuleMatches
        });
    }

    checkStyle(sourceText) {
        console.clear();
        this.setState({
            ruleMatches: []
        });
        let matches = [];
        let matchId = 0;

        this.props.styleRules.forEach(rule => {
            if (rule.isEnabled) {
                let re = new RegExp(rule.searchRegex, "g");
                let match;

                while ((match = re.exec(sourceText))) {
                    console.log(`Found ${match[0]} at ${match.index}`);
                    matches.push({
                        id: matchId,
                        match: [...match],
                        index: match.index,
                        input: match.input,
                        length: match.length,
                        matchedRuleName: rule.ruleName,
                        matchedRuleDisplayText: this.generateRuleDisplayText(
                            match,
                            rule
                        ),
                        matchedRuleSource: rule.ruleSource,
                        isDisplayed: true
                    });
                    matchId++;
                }
            }
        });
        this.setState({
            ruleMatches: matches
        });
    }

    generateRuleDisplayText(reMatch, matchedStyleRule) {
        let displayText = matchedStyleRule.displayText;
        if (reMatch.length === 1) {
            displayText = matchedStyleRule.displayText;
        } else {
            // console.log(reMatch);
            // console.log(matchedStyleRule.displayText);
            for (let i = 1; i < reMatch.length; i++) {
                // console.log(displayText);
                // console.log(`Match group ${i}: ${reMatch[i]}`);
                displayText = displayText.replace(`$${i}`, `${reMatch[i]}`);
            }
        }

        return displayText;
    }

    render() {
        return (
            <div className="row mt-3 mb-3 text-entry">
                <div className="col">
                    <SourceText onTextInput={this.handleTextInput} />
                    <Results
                        ruleMatches={this.state.ruleMatches}
                        editedText={this.state.editedText}
                        highlightedText={this.state.highlightedText}
                        setHighlightedText={this.handleHighlightedText}
                        setDismissedRule={this.handleDismissRule}
                    />
                </div>
            </div>
        );
    }
}

export default StyleChecker;
