import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Card from "../Components/Card";
import { BrowserRouter } from "react-router-dom";

describe("Check if Link component renders inside of Card", () => {
  it("renders Card", () => {
    render(
      <BrowserRouter>
        <Card />
      </BrowserRouter>
    );
    const linkElement = screen.getByRole("link");
    expect(linkElement).toBeInTheDocument();
  });
});
