import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Shop from "../src/components/Shop/Shop";
import { BrowserRouter } from "react-router-dom";

describe("Shop component", () => {
    it("Shop renders", () => {
        const { container } = render(
        <BrowserRouter>
            <Shop />
        </BrowserRouter>);
        expect(container).toMatchSnapshot();
    });

});