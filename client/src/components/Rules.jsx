import React, { Component } from "react";
import Rule from "./Rule";
import PropTypes from "prop-types";

class Rules extends Component {
    constructor(props) {
        super(props);

        this.state = {
            filterString: "",
            filteredRules: []
        };
    }

    filterRules(filterString) {
        const lowerCaseFilterString = filterString.toLowerCase();

        const filteredRules = this.props.styleRules.filter(rule => {
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
            filteredRules: filteredRules
        });
    }

    mapRules(rulesToMap) {
        const mappedRules = rulesToMap.map((rule, index) => {
            return <Rule key={index} rule={rule} ruleNum={index + 1} />;
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
                        <input
                            type="text"
                            className="form-control mb-2 mr-sm-2"
                            id="ruleFilter"
                            placeholder="Filter rules"
                            value={this.state.filterString}
                            onChange={event =>
                                this.filterRules(event.target.value)
                            }
                        />
                    </form>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Search</th>
                                <th scope="col">Details</th>
                                <th scope="col">Correction</th>
                                <th scope="col">Source</th>
                                <th scope="col">Enabled</th>
                                <th scope="col">Updated</th>
                                <th scope="col" />
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
    styleRules: PropTypes.array
};

export default Rules;
