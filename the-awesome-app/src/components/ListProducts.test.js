import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import ListProducts from "./ListProducts";
import axios from 'axios';

jest.mock("axios");


test("ListProducts", async () => {

    axios.get.mockResolvedValueOnce({
        data: [
            {id: 1, name: "abc", description: "desc1", price: 3000},
            {id: 2, name: "xyz", description: "desc2", price: 6000},
        ],
    });
    render(<ListProducts/>)

    await waitFor(() => expect(axios.get).toHaveBeenCalledTimes(1));
    await waitFor(() => expect(axios.get).toHaveBeenLastCalledWith("http://localhost:9000/products"));
    await waitFor(() => expect(screen.getByText("xyz")).toBeInTheDocument());

})