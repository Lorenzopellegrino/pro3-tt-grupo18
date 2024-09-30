import React , {Component} from 'react'
import "./Buscador.css";


class Buscador extends Component{
    constructor(props){
        super(props)
        this.state = {
            query: "",
            error: ""
        }
    }
    
    handleNoSubmit(e){
        e.preventDefault()
    }

    handleCambiar(e){
        this.setState({query: e.target.value,
            error: ""
         })
    }

    handleSubmit(){
        if(this.state.query.trim() === ""){
            this.setState({error: "Introduzca un título válido"});
        }else{
        this.props.history.push("/search" , {query: this.state.query})
    }}

    render(){
        return(
            <div className='buscador'>
                <form onSubmit={(e) => this.handleNoSubmit(e)}>
                    <input name = "query" type = "text" onChange={(e) => this.handleCambiar(e)} value ={this.state.query} placeholder='Busca cualquier película!'/>
                    <button  onClick={()=> this.handleSubmit()}>Buscar</button>
                </form>
                {this.state.error && <p style={{color:'red'}}>{this.state.error}</p>}
            </div>
        )
    }
}

export default Buscador


