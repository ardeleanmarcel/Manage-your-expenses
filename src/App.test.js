import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Manage your expenses link", () => {
  render(<App />);
  const linkElement = screen.getByText(/Manage your expenses/i);
  expect(linkElement).toBeInTheDocument();
});
