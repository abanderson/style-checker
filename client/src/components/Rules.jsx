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
                rule.correctionRegex
                    .toLowerCase()
                    .includes(lowerCaseFilterString) ||
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
            <div className="row mt-3 mb-3">
                <div className="col">
                    <h3 className="d-inline">Rules</h3>
                    <form className="d-inline float-right form-inline">
                        <label className="sr-only" htmlFor="ruleFilter">
                            Filter
                        </label>
                        <div class="input-group mb-2 mr-sm-2">
                            <input
                                type="text"
                                className="form-control border border-secondary"
                                id="ruleFilter"
                                placeholder="Filter rules"
                                value={this.state.filterString}
                                onChange={(event) =>
                                    this.filterRules(event.target.value)
                                }
                            />
                            <div className="input-group-append">
                                <button
                                    className="btn btn-outline-secondary"
                                    type="button"
                                    id="clearFilter"
                                    onClick={this.resetFilter}
                                    title="Clear filter"
                                >
                                    <span className="fas fa-times"></span>
                                </button>
                            </div>
                        </div>
                    </form>
                    <table className="table small">
                        <thead>
                            <tr>
                                <th scope="col" className="table-col-number">
                                    #
                                </th>
                                <th scope="col" className="table-col-name">
                                    Name
                                </th>
                                <th scope="col" className="table-col-search">
                                    Search
                                </th>
                                <th scope="col" className="table-col-details">
                                    Details
                                </th>
                                <th
                                    scope="col"
                                    className="table-col-correction"
                                >
                                    Correction
                                </th>
                                <th scope="col" className="table-col-source">
                                    Source
                                </th>
                                <th scope="col" className="table-col-enabled">
                                    Enabled
                                </th>
                                <th scope="col" className="table-col-updated">
                                    Updated
                                </th>
                                <th scope="col" className="table-col-edit"></th>
                                <th
                                    scope="col"
                                    className="table-col-delete"
                                ></th>
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
