import { render, screen } from "@testing-library/react";
import App from '../src/components/App';

describe('App component', () => {
    it("renders correct heading", () => {
        render(<App />);
        const message = screen.queryByText(/Hi! This is the home page./i)
        expect(message)
    });
});