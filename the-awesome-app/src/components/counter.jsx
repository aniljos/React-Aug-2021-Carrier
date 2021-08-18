import React, {Component} from 'react';

class Counter extends Component{

    // state -- any data type
    state = {
        count: 10
    }

    render(){
        //return the JSX
        return (
            <div>
                <h4>Counter: {this.props.title} - {this.state.count}</h4>
                <p>This is a class component</p>
            </div>
        )
    }
}

export default Counter;