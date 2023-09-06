import {useSelector} from 'react-redux';
import { AppState } from '../redux/store';
import { AuthState } from '../redux/authReducer';
import {Navigate} from 'react-router-dom';

function ProtectedRoute(props: any){

    const auth = useSelector<AppState>((reduxState) => reduxState.auth) as AuthState;

    if(auth.isAuthenticated){
        return props.children;
    }
    else{
        return <Navigate to="/login"/>
    }
   

}

export default ProtectedRoute;