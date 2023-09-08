import ListProducts from "../components/ListProducts";
import {render, screen, fireEvent} from '@testing-library/react';
import axios from 'axios';

it("render ListProducts", () => {

    render(<ListProducts/>);
    expect(screen.getByText("List Products")).toBeTruthy();
})