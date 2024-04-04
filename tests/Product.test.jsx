import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import Product from "../src/components/Product/Product";
import { vi } from "vitest";
import { useState } from "react";

/*describe("product component", () => {
    it("calls handleClick function when 'Add to Cart' button clicked", async () => {
        const handleClick = vi.fn();
        const user = userEvent.setup();

        render(<Product data={undefined} handleClick={handleClick} />);

        const button = screen.getByRole("button",{ name: "Add to cart"});

        await user.click(button);
        
        expect(handleClick).toHaveBeenCalled();

    });
})*/
const backpack = {
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    id: 1,
}

describe("Product component", () => {
    it("renders product", () => {
        render(<Product handleClick={() => {}} data={backpack} />);

        expect(screen.getByText('Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops')).toBeInTheDocument();
    });
    it("should add 1 more to quantity when plus button is clicked", async () => {
        const user = userEvent.setup();
        render(<Product handleClick={() => {}} data={backpack} />);
        const plusButton = screen.getAllByRole('button')[1];
        const input = screen.getByRole('spinbutton');

        await user.click(plusButton);
        
        expect(input.value).toBe('1');
    });
    it("should subtract 1 from quantity when minus button is clicked", async () => {
        const user = userEvent.setup();
        render(<Product handleClick={() => {}} data={backpack} />);
        const minusButton = screen.getAllByRole('button')[0];
        const input = screen.getByRole('spinbutton');
        input.value = 3

        await user.click(minusButton);
        
        expect(input.value).toBe('2');
    });
    it("should allow user to add their own quantity in the number field", async () => {
        const user = userEvent.setup();
        render(<Product handleClick={() => {}} data={backpack} />);
        const input = screen.getByRole('spinbutton');

        await user.click(input);
        await user.keyboard('4')

        expect(input.value).toBe('4');
    });
    it("calls handleClick function from parent component when add to cart button is clicked", async () => {
        const handleClick = vi.fn()
        const user = userEvent.setup();
        render(<Product handleClick={handleClick} data={backpack} />);
        const plusButton = screen.getAllByRole('button')[1];
        const cartButton = screen.getAllByRole('button')[2];

        await user.click(plusButton);
        await user.click(cartButton);

        expect(handleClick).toHaveBeenCalled();

    })
});