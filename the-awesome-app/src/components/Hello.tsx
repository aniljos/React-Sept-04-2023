
type HelloProps = {
    message: string;
}


function Hello(props:HelloProps){

    return (
        <div>
            <h4>{props.message}</h4>
            <p>This is a functional component</p>
            <p>Expression: {5 + 7}</p>
            <p>Created At {new Date().toString()}</p>
        </div>
    )
}

export default Hello;