// VisualContent.test.tsx
import { render, screen } from "@testing-library/react";
import VisualContent from ".";

jest.mock("../../assets/floor1.svg", () => ({
  ReactComponent: () => <div>Floor1</div>,
}));
jest.mock("../../assets/floor2.svg", () => ({
  ReactComponent: () => <div>Floor2</div>,
}));
jest.mock("../../assets/floor3.svg", () => ({
  ReactComponent: () => <div>Floor3</div>,
}));
jest.mock("../../assets/floor_plan.svg", () => ({
  ReactComponent: () => <div>Floor Plan</div>,
}));

describe("VisualContent Component", () => {
  test("renders the correct floor name", () => {
    const floorplan = { floorName: "Building A", floorImage: "floor1.svg" };
    const isToggle = false;

    render(<VisualContent floorplan={floorplan} isToggle={isToggle} />);

    expect(screen.getByText("Building A")).toBeInTheDocument();
  });

  test("renders the correct SVG based on floorImage", () => {
    const floorplan = { floorName: "Building A", floorImage: "floor1.svg" };
    const isToggle = false;

    render(<VisualContent floorplan={floorplan} isToggle={isToggle} />);

    expect(screen.getByText("Building A")).toBeInTheDocument();
  });

  test("shows fallback message when floorImage is empty", () => {
    const floorplan = { floorName: "Building A", floorImage: "" };
    const isToggle = false;

    render(<VisualContent floorplan={floorplan} isToggle={isToggle} />);

    expect(screen.getByText("Please select a location")).toBeInTheDocument();
  });
});
