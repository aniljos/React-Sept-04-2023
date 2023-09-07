import React, { useReducer } from "react";

export type ThemeState = {
    mode: string;
    dispatch?: any;

    
}

//initialState
export const initialState: ThemeState = {
    
    mode: "dark",
    
   
}

//create the context
export const AppThemeContext = React.createContext(initialState);

const reducer = (state: ThemeState, action: any)=> {

    if(action.type === "SET_DARK"){
        return {
            ...state,
            mode: "dark"
        }
    }
    if(action.type === "SET_LIGHT"){
        return {
            ...state,
            mode: "light"
        }
    }

    return state;
}

export function AppThemeProvider(props: any){

    const [state, dispatch] = useReducer(reducer, initialState);
    //const [state, setState] = useState(ini);

    return (
        <AppThemeContext.Provider value={{...state, dispatch}}>
            {props.children}
        </AppThemeContext.Provider>
    )
}