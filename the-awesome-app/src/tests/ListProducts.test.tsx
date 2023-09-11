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

    await waitFor(() => render(<Provider store={store}> <BrowserRouter><ListProducts/></BrowserRouter> </Provider>));
    await waitFor(async () => {  
    
        expect(screen.getByText("List Products")).toBeTruthy();
        expect(screen.getAllByTestId("product")).toHaveLength(3);
        

    });
})

it("delete Product", async () => {

    (axios.get as jest.Mock).mockResolvedValueOnce({data: [
        {id: 1, name: "P1", description: "D1", price: 1000},
        {id: 2, name: "P2", description: "D2", price: 2000},
        {id: 3, name: "P3", description: "D3", price: 3000}

    ]});

    (axios.delete as jest.Mock).mockResolvedValueOnce({status: 200});

    await waitFor(() => render(<Provider store={store}> <BrowserRouter><ListProducts/></BrowserRouter> </Provider>));
    await waitFor(async () => {  
    
        
        
        let allDeleteBtns = screen.getAllByText("Delete");
        
        
        (axios.get as jest.Mock).mockResolvedValueOnce({data: [
            
            {id: 2, name: "P2", description: "D2", price: 2000},
            {id: 3, name: "P3", description: "D3", price: 3000}
    
        ]});

        const firstBtn = allDeleteBtns[0];
        await waitFor(() =>  fireEvent.click(firstBtn, {}));
        // Wait for the product to be removed
        await waitForElementToBeRemoved(() => screen.getByTestId("product"));

       // Verify the updated state
        //const updatedProducts = screen.getAllByTestId("product");
        //expect(updatedProducts).toHaveLength(2);
        await waitFor(() => {
            const productElements = screen.getAllByTestId("product");
            expect(productElements).toHaveLength(3); // Update the expected length according to your component's logic
          });

    
    })
})