import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Cart from "../src/components/Cart/Cart";

describe("shopping cart", () => {
    it("renders shopping cart page", () => {
        render(
            <BrowserRouter>
                <Cart />
            </BrowserRouter>
        )

        expect(screen.getByText('Hi! This is your shopping cart.')).toBeInTheDocument();
    })
})