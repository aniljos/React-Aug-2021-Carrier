import React, {Component} from 'react';
import SimpleHOC from './SimpleHOC';


class Counter extends Component{

    // state -- any data type
    // consider the state to be immutable
    state = {
        count: 10
    }

    valueRef = React.createRef();

    constructor(props){
        super(props);

        this.decr = this.decr.bind(this);
    }

    // bind or Arrow function
    inc = (evt) => {
        console.log("in inc...", evt);
        //this.state.count++;
        const updatedCount = this.state.count + 1;

        //this.setState is async
        //this.setState(slice of state to be updated, callback)
        this.setState({
            count: updatedCount
        }, () => {
            console.log("in inc", this.state.count);
        });
        
    }

    decr(){

        console.log("in decr...");
        const updatedCount = this.state.count - 1;
        this.setState({
            count: updatedCount
        });
    }
    change = (evt) => {

        const value = evt.target.value;
        this.setState({
            count : value ? parseInt(value) : 0
        });
    }

    update = () => {

        if(this.valueRef.current.value){

            console.log("valueref", this.valueRef.current);
            this.setState({
                count: parseInt(this.valueRef.current.value) 
            })
        }
       
    }
    render(){
        //return the JSX
        return (
            <div>
                <h4>Counter: {this.props.title} - {this.state.count}</h4>
                <p>This is a class component</p>
                <div>
                    {/* onclick="foo()" */}
                    <button data-testid="incBt" onClick={this.inc}>Increment</button>&nbsp;
                    <button onClick={this.decr}>Decrement</button>
                </div>
                <br/>
                <div>
                    {/* Controlled Input */}
                    Count: <input data-testid="ctrInp" type="number" value={this.state.count} onChange={this.change}/>
                </div>
                <div>
                    {/* Uncontrolled Input */}
                    Value: <input type="number" ref={this.valueRef}/> 
                    <div>
                        <button onClick={this.update}>Update</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default SimpleHOC(Counter);