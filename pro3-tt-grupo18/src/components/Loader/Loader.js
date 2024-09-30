import React from 'react';
import './Loader.css';

const LoaderComponent = () => {
    return (
        <div className="loader-container">
            <img 
                src='https://j.gifs.com/KeX0g7.gif' 
                alt="Loading" 
                className="loader-image" 
            />
        </div>
    );
}

export default LoaderComponent;