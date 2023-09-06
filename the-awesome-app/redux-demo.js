
//import {createStore} from 'redux';
const redux = require('redux');
const createStore = redux.createStore;

console.log("Redux demo");

//initial State
const initState = {
    msg: "hello",
    count : 0
}
//reducer
const reducer = (currentState=initState, action) => {

    //return the updated state;
    if(action.type === "INC_CTR"){
        return {
            ...currentState,
            count: currentState.count + 1
        }
    }
    if(action.type === "UPD_CTR"){
        return {
            ...currentState,
            count: action.value
        }
    }
    if(action.type === "DECR_CTR"){
        return {
            ...currentState,
            count: currentState.count - 1
        }
    }
    return currentState;
}
//create store
const store = createStore(reducer);
//console.log("state", store.getState());

//subscribe
store.subscribe(() => {
    console.log("sunscriber state", store.getState());
})

//dispatch action
store.dispatch({type: "INC_CTR"});
//console.log("state", store.getState());
store.dispatch({type: "UPD_CTR", value: 30});
//console.log("state", store.getState());
store.dispatch({type: "DECR_CTR"});
//console.log("state", store.getState());



