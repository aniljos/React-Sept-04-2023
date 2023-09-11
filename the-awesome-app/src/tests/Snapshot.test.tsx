import { render } from "@testing-library/react";
import FnCounter from "../components/FnCounter";


//When the test is executed the first time it creates the shapshot
//To check change the init value to 9 or some other value, the test should fail
// To update the shapshots npm test -- --updateSnapshot
test('MyComponent snapshot', () => {
    const { asFragment } = render(<FnCounter initValue={8}  />);
    expect(asFragment()).toMatchSnapshot();
});