import React from "react";

const SourceText = () => {
    return (
        <div className="row mt-3 mb-3 text-entry">
            <div className="col">
                <textarea
                    className="form-control"
                    placeholder="Enter text to check"
                    id="exampleFormControlTextarea1"
                    rows="2"
                />
            </div>
        </div>
    );
};

export default SourceText;
