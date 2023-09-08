
type HelloProps = {
    message: string;
}


function HelloWithErrors(props:HelloProps){

    const obj: any= {id: 100}
    return (
        <div>
            <h4>{props.message}</h4>
            <p>This is a functional component</p>
            <p>Expression: {5 + 7}</p>
            <p>Created At {new Date().toString()}</p>
            <p>obj: {obj}</p>
        </div>
    )
}

export default HelloWithErrors;