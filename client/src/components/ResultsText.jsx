import React from "react";

const ResultsText = () => {
    return (
        <div>
            <div className="text-markup">
                <div className="d-flex justify-content-between align-items-baseline">
                    <h5 className="d-inline">Results</h5>

                    <a className="text-secondary mr-2 text-copy" href="#">
                        <span className="far fa-copy" />
                        <small className="font-weight-light">Copy</small>
                    </a>
                </div>
            </div>
            <p>The secret to doing anything is believing that you can do it.</p>
        </div>
    );
};

export default ResultsText;
