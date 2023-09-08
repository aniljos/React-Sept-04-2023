import {useNavigate} from 'react-router-dom';
//withNavigate(Counter)
function withNavigate(Component: any){

    return function WithNavigateHOC(props: any){

        const navigate = useNavigate();

        return <Component {...props} navigate={navigate}/>
    }
}

export default withNavigate;