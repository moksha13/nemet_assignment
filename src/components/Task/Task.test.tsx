import React from "react";
import { render, screen } from "@testing-library/react";
import Task from ".";
import Header from "../Header";
// import SideNav from "../Sidenav";
import VisualContent from "../VisualData";

describe("Task Component", () => {
  const headerProps = {
    colorValue: "nocolor",
    shapeValue: "",
    handleColor: jest.fn(),
    handleShape: jest.fn(),
    handleToggle: jest.fn(),
  };
  const handleImage = jest.fn();
  // const floorplan = { floorName: "Building A", floorImage: "floor1.svg" };
  // const isToggle = false;

  // render(<Task />);
  // // render(<Header {...headerProps} />);
  // render(<SideNav handleImage={handleImage} />);
  // render(<VisualContent floorplan={floorplan} isToggle={isToggle} />);

  // test("renders Header component", () => {
  //   headerProps.handleShape("all");
  //   expect(headerProps.handleShape).toHaveBeenCalledWith("all");
  //   headerProps.handleShape("rect");
  //   expect(headerProps.handleShape).toHaveBeenCalledWith("rect");
  // });

  // test("renders Sidenav component", () => {});
});
