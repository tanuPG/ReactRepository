import React, { Component } from 'react'
import '../App.css'

type CounterProps = {
    message: string
}

type CounterState = {
    count: number
}
const e = React.createElement

export class Counter extends Component<CounterProps, CounterState>{
    state ={    
        count: 0,
    }
    
    render(){
        return e('div', {className:"container my-4 bg-danger-subtle"}, [
            e('button', {type: "button", className: "btn btn-success mx-2", onClick:this.handleIncrementClick}, "Increment"),
            e('button', {type: "button", className: "btn btn-success mx-2", onClick:this.handleDecrementClick}, "Decrement"),
            e('div', {className:"m-4"}, [
            e('label', {className:"mx-1"} ,this.props.message),
            e('label', {className:"mx-1"} ,this.state.count)
            ])
        ])
        // (
        //     <div> 
        //         <button onClick={this.handleIncrementClick}>Increment</button>
        //         &nbsp; &nbsp;
        //         <button onClick={this.handleDecrementClick}>Decrement</button>
        //         <br/>
        //         {this.props.message} {this.state.count}
        //     </div>
        // )
    
    }

    handleIncrementClick = () => {
        this.setState((prevState) => ({count : prevState.count + 1}))
    }

    handleDecrementClick = () => {
        this.setState((prevState) => ({count : prevState.count - 1}))
    }
}


