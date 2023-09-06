import {createStore, combineReducers} from 'redux';
import {authReducer} from './authReducer';
import { gadgetStoreReducer } from './gadgetsReducer';


const reducers = combineReducers({
    auth: authReducer,
    gadgets: gadgetStoreReducer
});

export const store = createStore(
                            reducers, 
                            (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__());


export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;