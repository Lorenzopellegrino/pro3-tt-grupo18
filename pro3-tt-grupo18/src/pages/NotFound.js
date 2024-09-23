import React, { Component } from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

import ""

class NotFound extends Component {
    constructor(props){
        super(props)
        this.state = {}
    }
}

render(){
    return(
        <>
        <div>
        <Header>
            Not Found
        </Header>
        <Footer/>
        </div>
        
        </>
    )
}