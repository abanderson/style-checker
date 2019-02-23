import React, { Component } from "react";
import SourceText from "./SourceText";
import Results from "./Results";

class StyleChecker extends Component {
    constructor(props) {
        super(props);

        this.state = {
            editedText: "",
            highlightedText: "",
            ruleMatches: []
        };

        this.handleTextInput = this.handleTextInput.bind(this);
        this.handleHighlightedText = this.handleHighlightedText.bind(this);
        this.checkStyle = this.checkStyle.bind(this);
    }

    handleTextInput(textInput) {
        this.setState({
            editedText: textInput
        });

        this.checkStyle(textInput);
    }

    handleHighlightedText(highlightedText) {
        this.setState({ highlightedText: highlightedText });
        console.log("handleHighlightedText triggered");
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
                        matchedRuleDisplayText: this.generateRuleDisplayText(
                            match,
                            rule
                        ),
                        matchedRuleSource: rule.ruleSource
                    });
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
                        setHighlightedText={this.handleHighlightedText}
                    />
                </div>
            </div>
        );
    }
}

export default StyleChecker;
