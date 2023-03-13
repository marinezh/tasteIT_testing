import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import NewRecipe from "../Components/NewRecipe";
import { BrowserRouter } from "react-router-dom";

describe("Check if Link component renders inside of NewRecipe", () => {
  it("renders NewREcipe", () => {
    render(
      <BrowserRouter>
        <NewRecipe />
      </BrowserRouter>
    );
    const linkElement = screen.getByText("Add more");
    expect(linkElement).toBeInTheDocument();

    expect(screen.getByText("Post recipe")).toBeInTheDocument();
  });
});
