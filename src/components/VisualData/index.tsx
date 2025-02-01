import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import { ReactComponent as Floor1 } from "../../assets/floor1.svg";
import { ReactComponent as Floor2 } from "../../assets/floor2.svg";
import { ReactComponent as Floor3 } from "../../assets/floor3.svg";
import { ReactComponent as FloorPlan } from "../../assets/floor_plan.svg";
import {VisualContentProps} from './VisualDataInterface'

const getFloorImage = (floorImage: string) => {
  switch (floorImage) {
    case "floor1.svg":
      return <Floor1 />;
    case "floor2.svg":
      return <Floor2 />;
    case "floor3.svg":
      return <Floor3 />;
    case "floor_plan.svg":
      return <FloorPlan />;
    default:
      return null;
  }
};

const VisualDataContent = ({ floorplan, isToggle }: VisualContentProps) => {
  const { floorName, floorImage } = floorplan;
  const floorSVG = getFloorImage(floorImage); 

  return (
    <Paper elevation={2} sx={{ height: "100%", p: 1, width: "80%" }} square={false}>
      <Typography variant="body1" sx={{ fontWeight: 600 }}>
        {floorName}
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          p: 3,
          margin: "auto",
          transition: "transform 1s",
          transform: isToggle ? "rotate(180deg)" : "rotate(0deg)",
        }}
      >        {!floorImage && (
          <Typography variant="h5" sx={{ pt: 5, mt: 5 }}>
            Please select a location
          </Typography>
        )}
        {floorSVG}
      </Box>
    </Paper>
  );
};

export default VisualDataContent;