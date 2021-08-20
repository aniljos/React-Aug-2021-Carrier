import React, { useState, useCallback } from 'react';

//React.memo 16.3
const Simple = React.memo((props) => {
    console.log("executing simple..");
    return (
        <div>
            <h4>Simple</h4>
            <p>Ctr: {props.ctr}</p>
            <div>
                <button onClick={() => props.onChange(props.ctr + 10)}>Inc</button>
            </div>
        </div>
    );
});

const UseCallbackDemo = () => {

    const [count, setCount] = useState(0);
    const [name, setName] = useState('');

    const updateCount = useCallback((updatedCount) => {
        setCount(updatedCount);
    }, [count])

    return (
        <div>
            <h3>UseCallback Demo</h3>

            <div>
                <p>Count: {count}</p>
                <button onClick={()=> {setCount(count + 1)}}>Increment</button>
            </div>
            <div>
                <input placeholder="Name" value={name} onChange={(evt) => setName(evt.target.value)}/>
                {name}
            </div>
            <br/>
            <Simple ctr={count} onChange={updateCount}/>
        </div>
    )
}

export default UseCallbackDemo;