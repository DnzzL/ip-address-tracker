import React, { ChangeEvent } from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Input from "./Input";

// describe("<Input />", () => {
//   test("it should mount", () => {
//     render(
//       <Input
//         inputValue=""
//         onInputChange={function (event: ChangeEvent<HTMLInputElement>): void {
//           throw new Error("Function not implemented.");
//         }}
//       />
//     );

//     const input = screen.getByTestId("Input");

//     expect(input).toBeInTheDocument();
//   });
// });
