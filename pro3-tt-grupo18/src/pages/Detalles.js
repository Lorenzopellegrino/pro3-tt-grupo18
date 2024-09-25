import {Component} from "react";
import Detalle from "../components/Detalle/Detalle";

class Detalles extends Component{
    constructor(props){
        super(props);
        this.state = {
            id: props.match.params.id
        }
    }
    render(){
        return(
            <>
            <Detalle id={this.state.id}/>
            </>
        );
    }
};

export default Detalles;