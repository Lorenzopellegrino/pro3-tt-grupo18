import React from 'react';
import './Loader.css';

const LoaderComponent = () => {
    return (
        <div className="loaderContainer">
            <p className="loaderTexto">Esto podría demorar unos segundos...</p>
            <img 
                src='https://j.gifs.com/KeX0g7.gif' 
                alt="Loading" 
                className="loaderImage" 
            />
        </div>
    );
}

export default LoaderComponent;