import {Component, ReactNode} from 'react';
import withBorder from '../hoc/withBorder';
import withNavigate from '../hoc/withNavigate';

type CounterProps = {
    initValue: number,
    navigate: (route: string) => void
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

    navigate = () => {
        this.props.navigate("/fncounter")
    }

    render(): ReactNode {
        console.log("[Counter]: render");
        //return the JSX
        return (
            <div>
                <h4>Counter: {this.state.counter}</h4>
                <p>This is a class component</p>
                <br/>
                <div>
                    <button className='btn btn-primary' onClick={this.inc}>Inc</button> &nbsp;
                    <button className='btn btn-primary' onClick={this.decr}>Decr</button>
                </div>
                <br/>
                <div>
                    <button className='btn btn-primary' onClick={this.navigate}>Navigate To FnCounter</button>
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

export default withBorder(withNavigate(Counter));
//export default Counter;