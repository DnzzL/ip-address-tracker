import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ResultCard from "./ResultCard";

describe("<ResultCard />", () => {
  test("it should mount", () => {
    render(<ResultCard items={{}} />);

    const resultCard = screen.getByTestId("ResultCard");

    expect(resultCard).toBeInTheDocument();
  });
});
