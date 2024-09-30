import React , {Component} from 'react'


class Buscador extends Component{
    constructor(props){
        super(props)
        this.state = {
            query: ""
        }
    }
    
    handleNoSubmit(e){
        e.preventDefault()
    }

    handleCambiar(e){
        this.setState({query: e.target.value })
    }

    handleSubmit(){
        this.props.history.push("/search" , {query: this.state.query})
    }

    render(){
        return(
            <div>
                <form onSubmit={(e) => this.handleNoSubmit(e)}>
                    <input name = "query" type = "text" onChange={(e) => this.handleCambiar(e)} value ={this.state.query}/>
                    <button  onClick={()=> this.handleSubmit()}>Buscar</button>
                </form>
            </div>
        )
    }
}

export default Buscador


