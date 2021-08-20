import React, { useState, useCallback } from 'react';


const Simple = (props) => {
    console.log("executing simple..");
    return (
        <div>
            <h4>Simple</h4>
        </div>
    );
};



const UseCallbackDemo = () => {

    const [count, setCount] = useState(0);
    const [name, setName] = useState('');

    return (
        <div>
            <h3>UseCallback Demo</h3>

            <div>
                <p>Count: {count}</p>
                <button>Increment</button>
            </div>
            <div>
                <input placeholder="Name"/>
            </div>
            
            
            
        </div>
    )
}

export default UseCallbackDemo;