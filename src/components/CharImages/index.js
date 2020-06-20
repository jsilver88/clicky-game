import React from 'react';
import './charImages.css';

const CharImages = props => {
    return (
        <div className="charImages" onClick={() => props.handleClick(props.id)}>
            <div className="character-card card-image waves-effect waves-block waves-light">
                <img alt="South Park" src={props.image} className="characters activator clicked" />
            </div>
        </div>
    );
};

export default CharImages;