import FnCounter  from "../components/FnCounter";
import {render, screen, fireEvent} from "@testing-library/react";

describe("FnCounter Tests", () => {

    test("simple test", () => {
        
        var x = 10, y = 10;
        expect(x).toBe(y);
    });

    test("the FnCounter is rendered", () => {
        render(<FnCounter initValue={5}/>);
        expect(screen.getByText("Fn Counter: 5")).toBeTruthy();
    })

    test("FnCounter increment", () => {
        render(<FnCounter initValue={5}/>);
        expect(screen.getByText("Fn Counter: 5")).toBeTruthy();
        fireEvent.click(screen.getByText("Inc"), {});
        expect(screen.getByText("Fn Counter: 6")).toBeTruthy();

    })

    test("the FnCounter is rendered", () => {
        render(<FnCounter initValue={5}/>);
        expect(screen.getByText("Fn Counter: 5")).toBeTruthy();
        fireEvent.change(screen.getByPlaceholderText("Counter"), {target: {value: 25}});
        expect(screen.getByText("Fn Counter: 25")).toBeTruthy();

        fireEvent.change(screen.getByPlaceholderText("Enter a value"), {target: {value: 125}});
        expect(screen.getByText("Fn Counter: 25")).toBeTruthy();

        fireEvent.click(screen.getByText("Update"), {});
        expect(screen.getByText("Fn Counter: 125")).toBeTruthy();


    })



});