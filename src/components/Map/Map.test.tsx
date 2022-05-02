import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Map from "./Map";

describe("<Map />", () => {
  test("it should mount", () => {
    render(<Map lat={0} lng={0} />);

    const map = screen.getByTestId("Map");

    expect(map).toBeInTheDocument();
  });
});
