import { render, screen } from "@testing-library/react";
import App from "../../App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/Browse Recipes/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders learn react link2", () => {
  render(<App />);
  const linkElement = screen.getByText(/BC Helsinki hompepage/i);
  expect(linkElement).toBeInTheDocument();
});
