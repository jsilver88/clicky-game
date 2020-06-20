import React from 'react';

const Images = props => (
    <div className="charImages" onClick={() => props.handleClick(props.id)}>
        <img src={props.image} className="characters" />
    </div>
)

export default Images;