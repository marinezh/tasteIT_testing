import { render, screen } from "@testing-library/react";
import Recipes from "../Components/Recipes";
import userEvent from "@testing-library/user-event";

describe("Recipe component", () => {
  it("Recipe renders", () => {
    render(<Recipes />);

    expect(screen.getByText("All recipes")).toBeInTheDocument();
  });

  it("typing in Searchbox works", () => {
    render(<Recipes />);

    expect(screen.queryByDisplayValue(/pancakes/)).toBeNull();

    userEvent.type(screen.getByRole("searchbox"), "pancake");

    expect(screen.getByDisplayValue(/pancake/)).toBeInTheDocument();
  });
});
