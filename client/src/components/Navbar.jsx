import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Navbar = (props) => {
    return (
        <header>
            <Link to="/">
                <div class="logo">
                    <svg
                        width="30"
                        height="30"
                        viewBox="0 0 15 15"
                        fill="#EDEFF1"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M5.707 13.707a1 1 0 0 1-.39.242l-3 1a1 1 0 0 1-1.266-1.265l1-3a1 1 0 0 1 .242-.391L10.086 2.5a2 2 0 0 1 2.828 0l.586.586a2 2 0 0 1 0 2.828l-7.793 7.793zM3 11l7.793-7.793a1 1 0 0 1 1.414 0l.586.586a1 1 0 0 1 0 1.414L5 13l-3 1 1-3z"
                        />
                        <path
                            fill-rule="evenodd"
                            d="M9.854 2.56a.5.5 0 0 0-.708 0L5.854 5.855a.5.5 0 0 1-.708-.708L8.44 1.854a1.5 1.5 0 0 1 2.122 0l.293.292a.5.5 0 0 1-.707.708l-.293-.293z"
                        />
                        <path d="M13.293 1.207a1 1 0 0 1 1.414 0l.03.03a1 1 0 0 1 .03 1.383L13.5 4 12 2.5l1.293-1.293z" />
                    </svg>
                    <div class="header-text">Style Checker</div>
                </div>
            </Link>
            <nav>
                <Link to="/rules">
                    {props.numStyleRules}{" "}
                    {props.numStyleRules === 1 ? "rule" : "rules"} loaded
                </Link>
                <Link to="/add-rule">
                    <svg
                        width="30"
                        height="30"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M12 1H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zM8.5 6a.5.5 0 0 0-1 0v1.5H6a.5.5 0 0 0 0 1h1.5V10a.5.5 0 0 0 1 0V8.5H10a.5.5 0 0 0 0-1H8.5V6z"
                        />
                    </svg>
                </Link>
            </nav>
        </header>
    );
};

Navbar.propTypes = {
    numStyleRules: PropTypes.number,
};

export default Navbar;
