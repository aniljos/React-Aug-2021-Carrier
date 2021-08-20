import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import {connect} from 'react-redux';

//<ProtectedRoute path="/gadgets" component={GadgetStore}/>
class ProtectedRoute extends Component {

    render() {

        
        const { path, component,auth,  ...otherProps } = this.props;
        const isAuth = auth.isAuth;

        if (isAuth) {
            return <Route path={path} component={component}  {...otherProps}/>
        }
        else {
            return (<Route path={path}>
                <Redirect to="/login" />
            </Route>
            );
        }

    }
}

//mapping the reduxState to the component Props
const mapStateToProps = (reduxState)=>{

    return {
        auth : reduxState.auth,
       // cart : reduxState.gadgetStore.cart
    }
}

//mapping the dispatch to the component Props
const mapDispathToProps = (dispatch) => {
    return {
        setAuth : () => {dispatch({action: "SET_AUTH", data: {}})}
    }
}

export default connect(mapStateToProps, mapDispathToProps)(ProtectedRoute);
//export default ProtectedRoute;