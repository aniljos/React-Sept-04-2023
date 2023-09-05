import {Component, ReactNode} from 'react';

type CounterProps = {
    initValue: number
}




class Counter extends Component<CounterProps>{

    state = {
        counter: 0,
        msg: "hello"
    }

    constructor(props: CounterProps){
        super(props);

        this.state.counter = this.props.initValue;
    }

    inc = () => {
        console.log("inc invoked", this);
        //this.pValurops.inite++; //read-only
        //this.state.counter++; // dont update state directly

        //async => this.setState(sliceOftheStateToUpdate, callback)
        this.setState({
            counter: this.state.counter + 1
        }, () => {
            console.log(" this.state.counter",  this.state.counter);
        });

        
    }

    //event handler=> arrow function
    decr = () => {
        this.setState({
            counter: this.state.counter - 1
        });
    }

    render(): ReactNode {
        console.log("[Counter]: render");
        //return the JSX
        return (
            <div>
                <h4>Counter: {this.state.counter}</h4>
                <p>This is a class component</p>
                <div>
                    <button onClick={this.inc}>Inc</button> &nbsp;
                    <button onClick={this.decr}>Decr</button>
                </div>
            </div>
        )
    }

    componentDidMount(): void {
        console.log("[Counter]: componentDidMount");
    }
    componentDidUpdate(prevProps: Readonly<CounterProps>, prevState: Readonly<{}>, snapshot?: any): void {
        console.log("[Counter]: componentDidUpdate");
    }
    componentWillUnmount(): void {
        console.log("[Counter]: componentWillUnmount");
    }
}

export default Counter;