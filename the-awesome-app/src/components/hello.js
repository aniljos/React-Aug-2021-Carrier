

function Hello(props){

    //return JSX
    return (
        <div>
            <h3>Hello Component</h3>
            <p>This is a functional component</p>
            <p>Generated at {new Date().toLocaleDateString()} :: {new Date().toLocaleTimeString()} </p>
            <p>Message: {props.message}</p>
        </div>
       
    )    
}

export default Hello;