import { fireEvent, render, screen } from "@testing-library/react"
import Counter from './counter';

test("counter1", () => {
    render(<Counter/>);
    const content = screen.getByText(/Counter/i);
    expect(content).toBeInTheDocument();
})

test("counter2", () => {
    render(<Counter/>);
    let content = screen.getByText(/10/i);
    expect(content).toBeInTheDocument();
   // fireEvent.click(screen.getByText(/increment/i));
    fireEvent.click(screen.getByTestId("incBt"));
    content = screen.getByText(/11/i);
    expect(content).toBeInTheDocument();

    fireEvent.change(screen.getByTestId("ctrInp"), { target: { value: "100"}});
    content = screen.getByText(/100/i);
    expect(content).toBeInTheDocument();

})