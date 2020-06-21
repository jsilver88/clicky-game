import React from 'react';
import './header.css';

const Header = props => (
    <div id="header" className="container">
        <div className="col">
            <span className="headerSection">
                <h4 id="rules">Click on an image to earn points, but don't click on any of them more than once!</h4>
            </span>
        </div>
    </div>
)

export default Header;