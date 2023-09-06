import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import {authReducer} from './authReducer';
import { gadgetStoreReducer } from './gadgetsReducer';
import thunk from 'redux-thunk';


const reducers = combineReducers({
    auth: authReducer,
    gadgets: gadgetStoreReducer
});

//middleware(logging)
const loggingMiddleware = (store: any) => {
    return (next: any) => {
        return (action: any) => {
            console.log("[LogMiddleware Action]", action);
            console.log("[LogMiddleware Currentstate]", store.getState());
            const result = next(action);
            console.log("[LogMiddleware Updatedstate]", store.getState());

        }
    }
}

// export const store = createStore(
//                             reducers, 
//                             (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__());

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
    reducers, 
    composeEnhancers( applyMiddleware(loggingMiddleware, thunk)));


export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;