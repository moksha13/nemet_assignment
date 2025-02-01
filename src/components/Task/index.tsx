import React, { useEffect, useState } from "react";
import Header from "../Header";
// import SideNav from "../SideNav";
import VisualContent from "../VisualData";
import Box from "@mui/material/Box";
// import { Grid2 as Grid } from "@mui/material";
import { LOCATION_IDS } from "../../constants/floorplan";
import NavigationComponent from "../Navigation";

const Task = () => {
  const [selectedColor, setSelectedColor] = useState("no color");
  const [selectedShape, setSelectedShape] = useState("all");
  const [toggleState, setToggleState] = useState(false);
  const [floorImageData, setFloorImageData] = useState({
    floorName: "",
    floorImage: "",
  });

  const updateColorSelection = (color: string) => {
    setSelectedColor(color);
  };

  const updateShapeSelection = (shape: string) => {
    setSelectedShape(shape);
  };

  const updateFloorImage = (image: string, name: string) => {
    setFloorImageData({
      floorName: image,
      floorImage: name,
    });
  };

  const toggleDisplayMode = () => {
    setToggleState(!toggleState);
  };

  useEffect(() => {
    if (selectedShape === "all") {
      LOCATION_IDS.forEach((id) =>
        document.querySelector(`#${id}`)?.setAttribute("fill", selectedColor)
      );
    } else if (selectedShape === "rect") {
      LOCATION_IDS.forEach((id) => {
        const element = document.querySelector(`#${id}`);
        if (element?.tagName === "rect") {
          element.setAttribute("fill", selectedColor);
        } else {
          element?.setAttribute("fill", "#fff");
          element?.setAttribute("stroke", "#fff");
        }
        if (
          element?.tagName === "polygon" ||
          element?.tagName === "circle"
        ) {
          element?.setAttribute("fill", "#f0f0f0");
          element?.setAttribute("stroke", "#f0f0f0");
        }
        if (
          element?.tagName === "ellipse" ||
          element?.tagName === "path"
        ) {
          element?.setAttribute("fill", "#fff");
          element?.setAttribute("stroke", "#fff");
        }
      });
    } else if (selectedShape === "circle") {
      LOCATION_IDS.forEach((id) => {
        const element = document.querySelector(`#${id}`);
        if (
          element?.tagName === "circle" ||
          element?.tagName === "ellipse"
        ) {
          element?.setAttribute("fill", selectedColor);
        } else {
          element?.setAttribute("fill", "#f0f0f0");
          element?.setAttribute("stroke", "#f0f0f0");
        }
        if (element?.tagName === "path") {
          element?.setAttribute("fill", "#fff");
          element?.setAttribute("stroke", "#fff");
        }
        if (element?.tagName === "polygon") {
          element?.setAttribute("fill", "#f0f0f0");
          element?.setAttribute("stroke", "#f0f0f0");
        }
      });
    } else if (selectedShape === "star") {
      LOCATION_IDS.forEach((id) => {
        const element = document.querySelector(`#${id}`);
        if (
          element?.tagName === "path" ||
          element?.tagName === "polygon"
        ) {
          element?.setAttribute("fill", selectedColor);
        } else {
          element?.setAttribute("fill", "#fff");
          element?.setAttribute("stroke", "#fff");
        }
        if (
          element?.tagName === "rect" ||
          element?.tagName === "circle"
        ) {
          element?.setAttribute("fill", "#f0f0f0");
          element?.setAttribute("stroke", "#f0f0f0");
        }
      });
    } else {
      LOCATION_IDS.forEach((id) =>
        document.getElementById(id)?.removeAttribute("fill")
      );
    }
  }, [selectedColor, floorImageData, selectedShape]);

  return (
    <Box sx={{ background: "#eaeaea", display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Header
      currentColor={selectedColor}
      currentShape={selectedShape}
      updateColor={updateColorSelection}
      updateShape={updateShapeSelection}
      toggleMode={toggleDisplayMode}
      />
      <Box sx={{ flex: 1, display: "flex" }}>
        <Box sx={{
          width: "25%",
          borderRight: "1px solid #ccc",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between"
        }}>
          <NavigationComponent handleImage={updateFloorImage} />
        </Box>
        <Box sx={{
          width: "75%",
          padding: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>
          <VisualContent floorplan={floorImageData} isToggle={toggleState} />
        </Box>
      </Box>
    </Box>
  );
};

export default Task;
