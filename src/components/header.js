import React from 'react';

const Header = props => (
    <div id="header" className="container">
        <div className="col l6">
            <span className="headerSection"></span>
        </div>
        <div className="col l6">
            <span className="headerSection" id="headerMid">
                <h4 id="rules">Click on an image to earn points, but don't click on any of them more than once!</h4>
            </span>
        </div>
    </div>
)

export default Header;