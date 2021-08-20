import React from 'react';


// HOC
function SimpleHOC(Component){

    //return a new Component
    return function(props){
        return (
            <div style={{border: "2px solid red"}}>
                <Component {...props}/>
            </div>
        );
    }
}


export default SimpleHOC;