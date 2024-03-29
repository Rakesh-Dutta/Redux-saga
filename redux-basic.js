const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    counter :0
}

//Reducer
const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case 'INC_COUNTER' : 
            return {
                ...state,
                counter: state.counter+1
            } 
         case 'ADD_COUNTER' :
             return {
                 ...state,
                 counter: state.counter + action.value
             }   
        default: return state;
    }
        
}

//Store
const store = createStore(rootReducer);

//Subscribe
store.subscribe( () => {
    console.log('subscribed->', store.getState());
})

console.log('initial->', store.getState());

//Dispatch
store.dispatch({ type: 'INC_COUNTER'});
console.log('**', store.getState());
store.dispatch({ type: 'ADD_COUNTER', value : 5})
console.log("******", store.getState())

