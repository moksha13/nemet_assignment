import React from "react";
import { render, screen } from "@testing-library/react";
import SideNav from ".";

test("renders SideNav component", () => {
  const handleImage = jest.fn();
  render(<SideNav handleImage={handleImage} />);

  handleImage("floor1.svg", "Building A");
  expect(handleImage).toHaveBeenCalledWith("floor1.svg", "Building A");
});
