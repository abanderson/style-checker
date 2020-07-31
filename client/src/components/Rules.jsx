import React, { Component } from "react";
import Rule from "./Rule";
import PropTypes from "prop-types";

class Rules extends Component {
    constructor(props) {
        super(props);

        this.state = {
            filterString: "",
            filteredRules: [],
        };

        this.resetFilter = this.resetFilter.bind(this);
    }

    filterRules(filterString) {
        const lowerCaseFilterString = filterString.toLowerCase();

        const filteredRules = this.props.styleRules.filter((rule) => {
            return (
                rule.ruleName.toLowerCase().includes(lowerCaseFilterString) ||
                rule.searchRegex
                    .toLowerCase()
                    .includes(lowerCaseFilterString) ||
                rule.displayText
                    .toLowerCase()
                    .includes(lowerCaseFilterString) ||
                (rule.correctionRegex &&
                    rule.correctionRegex
                        .toLowerCase()
                        .includes(lowerCaseFilterString)) ||
                rule.ruleSource.toLowerCase().includes(lowerCaseFilterString)
            );
        });

        this.setState({
            filterString: filterString,
            filteredRules: filteredRules,
        });
    }

    resetFilter() {
        this.setState({
            filterString: "",
        });
    }

    isValidRule(ruleProperties) {
        let isValid = true;
        let errorMessage = "";

        if (ruleProperties.searchRegex === "") {
            isValid = false;
            errorMessage = "Field cannot be blank";
        } else {
            this.props.styleRules.forEach((rule) => {
                if (
                    ruleProperties.ruleId !== rule.id &&
                    ruleProperties.searchRegex === rule.searchRegex
                ) {
                    errorMessage = "Search regex already exists in database.";
                    isValid = false;
                }
            });
        }

        if (!isValid) {
            console.log(errorMessage);
            window.alert(errorMessage);
        }
        return isValid;
    }

    mapRules(rulesToMap) {
        const mappedRules = rulesToMap.map((rule, index) => {
            return (
                <Rule
                    key={index}
                    rule={rule}
                    ruleNum={index + 1}
                    deleteRule={this.props.deleteRule}
                    updateRule={this.props.updateRule}
                    resetRuleFilter={this.resetFilter}
                    isValidRule={this.isValidRule.bind(this)}
                    filterString={this.state.filterString}
                    filterRules={this.filterRules.bind(this)} /* New */
                />
            );
        });

        return mappedRules;
    }

    render() {
        let rules;

        if (this.state.filterString === "") {
            rules = this.mapRules(this.props.styleRules);
        } else {
            rules = this.mapRules(this.state.filteredRules);
        }

        return (
            <div>
                <div className="rules-header">
                    <h1 className="page-title">Rules</h1>
                    <div className="rule-filter">
                        <input
                            type="text"
                            id="ruleFilter"
                            className="input-filter"
                            name=""
                            placeholder="Filter rules..."
                            value={this.state.filterString}
                            onChange={(event) =>
                                this.filterRules(event.target.value)
                            }
                        />
                        <span
                            className="input-filter-clear"
                            title="Clear filter"
                            onClick={this.resetFilter}
                        >
                            <svg
                                width="1.5em"
                                height="1.5em"
                                viewBox="0 -1 16 16"
                                fill="#115937"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"
                                />
                                <path
                                    fillRule="evenodd"
                                    d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"
                                />
                            </svg>
                        </span>
                    </div>
                </div>
                <div style={{ overflowX: "auto" }}>
                    <table>
                        <thead>
                            <tr>
                                <th>
                                    <span className="table-heading">#</span>
                                </th>
                                <th>
                                    <span className="table-heading">Name</span>
                                </th>
                                <th>
                                    <span className="table-heading">
                                        Search
                                    </span>
                                </th>
                                <th>
                                    <span className="table-heading">
                                        Details
                                    </span>
                                </th>
                                <th>
                                    <span className="table-heading">
                                        Correction
                                    </span>
                                </th>
                                <th>
                                    <span className="table-heading">
                                        Source
                                    </span>
                                </th>
                                <th>
                                    <span className="table-heading">
                                        Enabled
                                    </span>
                                </th>
                                <th>
                                    <span className="table-heading">
                                        Updated
                                    </span>
                                </th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>{rules}</tbody>
                    </table>
                </div>
            </div>
        );
    }
}

Rules.propTypes = {
    styleRules: PropTypes.array,
    deleteRule: PropTypes.func,
    updateRule: PropTypes.func,
};

export default Rules;
