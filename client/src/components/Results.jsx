import React from "react";
import ResultsText from "./ResultsText";

const Results = () => {
    return (
        <div>
            <div className="row results mb-4">
                <div className="col">
                    <ResultsText />
                </div>
                <div className="col">
                    <div className="correction-list">
                        <h5>5 rules matched</h5>
                        <ul className="list-group">
                            <li className="list-group-item">
                                Possibly confused with <strong>Discrete</strong>
                            </li>
                            <li className="list-group-item">
                                Change to third-person voice in press releases
                            </li>
                            <li className="list-group-item">
                                Change to <strong>percent</strong> in narrative
                                copy. Leave unchanged in headings.
                            </li>
                            <li className="list-group-item">
                                Change to <strong>%</strong> in headings. Leave
                                unchanged in narrative copy
                            </li>
                            <li className="list-group-item">
                                Hyphenate (e.g., "stand-alone")
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Results;
