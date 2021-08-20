import {createStore, combineReducers} from 'redux';

//initial State
const initAuthState = {
    isAuth: false,
    userName: "",
    accessKey: ""
}

//reducer
const authReducer = (currentState=initAuthState, action) => {

    //return the updated State
    return currentState;
}
// immutable
const initCartState ={
    cart: []
}
//reducer
const cartReducer = (currentState=initCartState, action) => {

    //return the updated State
    if(action.type === "AddToCart"){
        const cartItem = action.payload;
        const cart = [...currentState.cart];
        cart.push(cartItem);
        return {
            cart
        };
    }


    return currentState;
}


//export const store = createStore(authReducer);
export const store = createStore(combineReducers({auth: authReducer, gadgetStore: cartReducer}), 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());