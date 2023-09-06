export type AuthState = {
    isAuthenticated: boolean;
    userName: string;
    accessToken: string;
    refreshToken: string;
}

//initState
const initState: AuthState = {

    isAuthenticated: false,
    userName: "",
    accessToken: "",
    refreshToken: ""
}
//reducer
export const authReducer = (currentState=initState, action: any) => {

    if(action.type === "UPDATE_AUTH"){
        return {
            ...action.payload
        }
    }

    return currentState;
}