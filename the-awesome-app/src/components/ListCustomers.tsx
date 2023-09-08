import { Component, PureComponent, ReactNode } from "react";
import axios from 'axios';
import {connect} from 'react-redux';
import { AppState } from "../redux/store";

type ListCustomersState = {
    customers: Array<any>
}

class ListCustomers extends PureComponent<any, ListCustomersState>{

    state = {
        customers: []
    }

    componentDidMount(): void {

        console.log("[ListCustomers componentDidMount]")
        this.fetchCustomers();
    }
    // shouldComponentUpdate(nextProps: Readonly<any>, nextState: Readonly<ListCustomersState>, nextContext: any): boolean {
    //     return true;
    // }

    componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<ListCustomersState>, snapshot?: any): void {
        console.log("[ListCustomers componentDidUpdate]")

    }

    componentWillUnmount(): void {
        console.log("[ListCustomers componentWillUnmount]")
    }
    async fetchCustomers() {

        try {
            const url = process.env.REACT_APP_BASE_URL + "/secure_customers";
            const response = await axios.get(url)
            this.setState({
                customers: response.data
            });
        } catch (error) {

            console.log("error", error);
        }

    }
    render(): ReactNode {
        return (
            <div>
                <h4>List Customers</h4>
                <p>Welcome {this.props.auth.userName}</p>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Customer ID</th>
                            <th>Name</th>
                            <th>Location</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.customers.map((item: any) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.location}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapReduxStateWithComponentProps = (state: AppState) => {

    return {
        auth: state.auth
    }
};

export default connect(mapReduxStateWithComponentProps)(ListCustomers);