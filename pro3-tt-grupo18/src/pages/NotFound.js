import React, { Component } from 'react';

class NotFound extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <>
                <div className="not-found-container">
                    <h1>404 - Not Found</h1>
                    <img 
                        src="https://media1.tenor.com/m/lx2WSGRk8bcAAAAC/pulp-fiction-john-travolta.gif" 
                        alt="Not Found" 
                    />
                    <p>Lo sentimos, la página que buscas no existe.</p>
                    <a href="/">Regresar a la página principal</a>
                </div>
            </>
        );
    }
}

export default NotFound;