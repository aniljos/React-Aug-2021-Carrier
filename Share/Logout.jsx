import React from 'react';
import { Link } from 'react-router-dom';

//functional component
function Logout(props) {

    //return the view(JSX)
    return (
        <div>
            <h4>You have been logged out successfully</h4>
            <p>
                <Link to="/login">Login</Link>
            </p>
        </div>
    );
}


export default Logout;