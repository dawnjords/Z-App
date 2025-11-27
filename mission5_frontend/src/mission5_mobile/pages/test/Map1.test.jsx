import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Map1 from "../Map1.jsx"; // adjust if Map1 is in a different folder

function renderWithRouter() {
  return render(
    <MemoryRouter>
      <Map1 />
    </MemoryRouter>
  );
}

describe("Map1 screen", () => {
  it("renders the 9:41 time in the status bar", () => {
    renderWithRouter();
    expect(screen.getByText("9:41")).toBeInTheDocument();
  });
});
