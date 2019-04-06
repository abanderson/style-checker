import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Navbar = props => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" className="navbar-brand">
                <span className="fas fa-pen-fancy" /> Style Checker
            </Link>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link to="/rules" className="nav-link">
                            {props.numStyleRules}{" "}
                            {props.numStyleRules === 1 ? "rule" : "rules"}{" "}
                            loaded
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/add-rule" className="nav-link">
                            <span className="fas fa-plus" />
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

Navbar.propTypes = {
    numStyleRules: PropTypes.number
};

export default Navbar;
