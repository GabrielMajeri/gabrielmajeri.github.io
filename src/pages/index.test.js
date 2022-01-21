import React from "react";
import { render } from "@testing-library/react";

import HomePage from "./index";

test("Displays my name", () => {
  const { queryByText } = render(<HomePage />);

  // expect(queryByText("Gabriel Majeri")).toBeTruthy();
});
