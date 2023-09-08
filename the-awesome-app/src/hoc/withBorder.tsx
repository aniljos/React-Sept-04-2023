// hoc => is always a function that receives a component 

//withBorder(Counter)
//withBorder(Hello)
function withBorder(Component: any){

    //implementaion: is to return a new component(functional or a class)
    return function WithBorderHOC(props: any){

        return (
            <div style={{border: "2px solid blue", margin: "4px", padding: "7px"}}>
                <Component {...props}/>
            </div>
        )

    }
}

export default withBorder;