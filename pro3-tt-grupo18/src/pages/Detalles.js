import { Component } from "react";
import Detalle from "../components/Detalle/Detalle";
import LoaderComponent from "../components/Loader/Loader"; // Asegúrate de tener este componente

class Detalles extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: null, 
            loading: true, 
        };
    }
    componentDidMount() {
        const { id } = this.props.match.params;
        if (id) {this.setState({
                    id: id,
                    loading: false,
            });
        }
    }
    render() {
        const { loading, id } = this.state;
        if (loading) {return <LoaderComponent />;
        }
        if (!id) {return <p>Error: No se encontró la película.</p>;}
        return (
        <>
        <Detalle id={id} />
        </>
        );
    }
}

export default Detalles;