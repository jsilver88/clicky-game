import React from 'react';

const Nav = props => {
    return (
        <div className="navbar-fixed">
            <nav>
                <div className="nav-wrapper row blue darken-4 center">
                    <div className="col s4">
                        <a href="/">South Park Clicky Game</a>
                    </div>
                    <div className="col s4">
                        <span>Click a character to begin!</span>
                    </div>
                    <div className="col s4">
                        <span>Score: {props.score} | High Score: {props.highScore}</span>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Nav;