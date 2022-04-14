import React from 'react'
import {useState} from 'react'

class Homework1 extends React.Component {

    constructor (props) {
        super()
        console.log(props)
        this.state = {
            s1: props.p1
        }
        this.s2 = 201
        
    }

    componentDidMount() {
        this.setState({
            s1: this.state.s1 + 5
        })
        this.s2 += 5
    }

    buttonHandler = () => {
        this.setState({
            s1: this.state.s1 + 50
        })
        this.s2 += 50
    }

    render () {
        return(
            <>
            <div>{this.state.s1}</div>
            <div>{this.s2}</div>
            <button onClick={this.buttonHandler}>Hit me</button>
            </>
        )
    }
}

export default Homework1