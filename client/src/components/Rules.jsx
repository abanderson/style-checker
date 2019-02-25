import React from "react";
import Rule from "./Rule";

const Rules = ({ styleRules }) => {
    const rules = styleRules.map((rule, index) => {
        return <Rule key={index} rule={rule} ruleNum={index + 1} />;
    });

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
};

export default Rules;
