import ListProducts from "../components/ListProducts";
import {render, screen, fireEvent, waitFor, waitForElementToBeRemoved} from '@testing-library/react';
import axios from 'axios';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {store} from '../redux/store';

jest.mock("axios");

it("render ListProducts", async () => {

    (axios.get as jest.Mock).mockResolvedValueOnce({data: [
        {id: 1, name: "P1", description: "D1", price: 1000},
        {id: 2, name: "P2", description: "D2", price: 2000},
        {id: 3, name: "P3", description: "D3", price: 3000}

    ]});

    (axios.delete as jest.Mock).mockResolvedValueOnce({status: 200});

    await waitFor(() => render(<Provider store={store}> <BrowserRouter><ListProducts/></BrowserRouter> </Provider>));
    await waitFor(async () => {  
    
        expect(screen.getByText("List Products")).toBeTruthy();
        expect(screen.getAllByTestId("product")).toHaveLength(3);

        //const allProducts = screen.getAllByTestId("product");

        let allDeleteBtns = screen.getAllByText("Delete");
        await waitFor(() =>  fireEvent.click(allDeleteBtns[0], {}));
        //await waitForElementToBeRemoved(allProducts[0]);
        expect(screen.getAllByTestId("product")).toHaveLength(2);


    
    });
    
    
    //await waitFor(() => expect(screen.getAllByTestId("product")).toHaveLength(7));



})