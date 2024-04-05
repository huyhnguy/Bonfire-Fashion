import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Navbar from "../src/components/Navbar";
import { vi } from "vitest";
import { BrowserRouter } from "react-router-dom";
import App from "../src/components/App";
import Shop from "../src/components/Shop/Shop";

describe("Navigation bar", () => {
    it("renders navigation bar", () => {
        render(
            <BrowserRouter>
                <Navbar />
            </BrowserRouter>
        )

        expect(screen.getByRole("navigation")).toBeInTheDocument();
    });

    it("opens shop page upon clicking Shop on the nav bar", async () => {
        const user = userEvent.setup();
        render(
            <BrowserRouter>
                <App />
            </BrowserRouter>
        )
        const shopLink = screen.getByRole("link", {name: 'Shop'});

        await user.click(shopLink);

        expect(shopLink).toHaveAttribute('href', '/shop')
    });

    it("opens cart page upon clicking Shopping Cart on the nav bar", async () => {
        const user = userEvent.setup();
        render(
            <BrowserRouter>
                <App />
            </BrowserRouter>
        )
        const cartLink = screen.getByRole("link", {name: /shopping cart/i});

        await user.click(cartLink);

        expect(cartLink).toHaveAttribute('href', '/cart')
    });

    it("opens home page upon clicking Home on the nav bar", async () => {
        const user = userEvent.setup();
        render(
            <BrowserRouter>
                <App />
            </BrowserRouter>
        )
        const homeLink = screen.getByRole("link", {name: /home/i});

        await user.click(homeLink);

        expect(homeLink).toHaveAttribute('href', '/')
    });
});