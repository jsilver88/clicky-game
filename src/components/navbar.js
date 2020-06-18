import React from 'react';

const Nav = ({ score, highScore, text }) => {
    return (
        <div className="navbar-fixed">
            <nav>
                <div className="nav-wrapper row blue darken-4 center">
                    <div className="col s4">
                        <a href="/">South Park Clicky Game</a>
                    </div>
                    <div className="col s4">
                        <span>{text}</span>
                    </div>
                    <div className="col s4">
                        <span>Score: {score} | High Score: {highScore}</span>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Nav;