import { Component, ErrorInfo, ReactNode } from "react";

class AppErrorBoundary extends Component<any, any>{

    state: Readonly<any> = {
        hasError: false
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        console.log("error", error);
        console.log("errorInfo", errorInfo);

        if(error){
            this.setState({
                hasError: true
            })
        }
    }

    render(): ReactNode {

        if(this.state.hasError){
            return (
                <div className="alert alert-danger">
                      Technical Error. Please refresh the browser
                      <a href="http://localhost:3000">Reload</a>  
                </div>
            )
        }
        else{
            return this.props.children;
        }
       
    }
}

export default AppErrorBoundary;