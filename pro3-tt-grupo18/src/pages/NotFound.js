import React, { Component } from 'react';
import LoaderComponent from '../components/Loader/Loader';

class NotFound extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
        };
    }
    componentDidMount(){
        this.setState({loading: false});
    }

    render() {
        return (
            <>
            {this.state.loading ? (
                <LoaderComponent />
            ) : (
                <div className="not-found-container">
                    <h1>404 - Not Found</h1>
                    <img 
                        src="https://media1.tenor.com/m/lx2WSGRk8bcAAAAC/pulp-fiction-john-travolta.gif" 
                        alt="Not Found" 
                    />
                    <p>Lo sentimos, la página que buscas no existe.</p>
                    <a href="/">Regresar a la página principal</a>
                </div>
            )}    
            </>
        );
    }
}

export default NotFound;