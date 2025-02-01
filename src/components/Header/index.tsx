import {
  AppBar,
  Button,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  Toolbar,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { getRandomHexColor, hexColorToGeneralName } from "../../utils/colors";
import { HeaderInterface } from "./HeaderInterface";

const Header = ({
  currentColor,
  currentShape,
  updateColor,
  updateShape,
  toggleMode,
}: HeaderInterface) => {
  const [availableColors, setAvailableColors] = useState<string[]>([]);

  useEffect(() => {
    let colorsList = [];
    for (let i = 0; i < 10; i++) {
      colorsList.push(getRandomHexColor());
    }
    setAvailableColors(colorsList);
  }, []);

  const colorOptions = availableColors.map((color: any) => {
    const colorLabel = hexColorToGeneralName(color);
    return { hex: color, name: colorLabel };
  });

  console.log(currentColor,"currentColor")

  return (
    <AppBar position="static" sx={{ p: 0, m: 0 }}>
      <Toolbar>
        <div style={{margin:'auto'}}>
        <Button color="success" variant="contained" onClick={toggleMode} style={{marginRight:20}}>
          Toggle Mode
        </Button>
        <FormControl sx={{ width: 220 , marginRight:2}} size="small" variant="outlined">
          <Select
            id="color-selector"
            value={currentColor}
            defaultValue="none"
            onChange={(e: SelectChangeEvent) => {
              updateColor(e.target.value);
            }}
            sx={{ backgroundColor: "skyblue", color: "#000" }}
          >
            <MenuItem value="no color" defaultValue="none">
              No Color
            </MenuItem>
            {colorOptions.map((color: { [key: string]: string }, idx: number) => (
              <MenuItem value={color.hex} key={idx}>
                {color.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl sx={{ width: 220 }} size="small">
          <Select
            id="shape-selector"
            value={currentShape}
            onChange={(e: SelectChangeEvent) => {
              updateShape(e.target.value);
            }}
            variant="outlined"
            sx={{ backgroundColor: "skyblue", color: "#000" }}
          >
            <MenuItem value="all">All Shapes</MenuItem>
            <MenuItem value="circle">Circle</MenuItem>
            <MenuItem value="rectangle">Rectangle</MenuItem>
            <MenuItem value="star">Star</MenuItem>
          </Select>
        </FormControl>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
