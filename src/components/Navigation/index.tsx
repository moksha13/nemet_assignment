import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  Paper,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { locationsData } from "../../data/locations";

const NavigationComponent = ({
  handleImage,
}: {
  handleImage: (image: string, name: string) => void;
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: 3,
        marginBottom: 3,
        backgroundColor: "#fafafa",  
        borderRadius: "8px",  
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", 
        height: "100%",
      }}
    >
      <Typography variant="h5" sx={{ marginBottom: 2 }}>
        Navigate Floor Plans
      </Typography>
      
      {locationsData &&
        locationsData.map((location) => (
          <Accordion key={location.id} disableGutters sx={{marginBottom:'6px'}}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel-${location.id}-content`}
              id={`panel-${location.id}-header`}
              sx={{
                backgroundColor: "#f0f0f0",  
                borderRadius: "4px",
               
              
              }}
            >
              <Typography component="span" sx={{ fontWeight: 600 }}>
                {location.name}
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                padding: "10px 20px",
                backgroundColor: "#fff", 
                borderRadius: "4px",
              }}
            >
              {location.children.length > 0 &&
                location.children.map((building) => (
                  <Accordion elevation={0} key={building.id}  disableGutters>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls={`panel-${building.id}-content`}
                      id={`panel-${building.id}-header`}
                      sx={{
                        backgroundColor: "#f7f7f7", 
                        borderRadius: "4px",
                        padding: "8px 20px",
                        

                      }}
                    >
                      <Typography component="span" sx={{ fontWeight: 500 }}>
                        {building.name}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails
                      sx={{
                        backgroundColor: "#fafafa",  
                        borderRadius: "4px",
                        padding: "10px 20px",
                      }}
                    >
                      <List>
                        {building.children.length > 0 &&
                          building.children.map((floor) => (
                            <ListItem
                              disablePadding
                              key={floor.id}
                              onClick={() => handleImage(floor.name, floor.floorplan)}
                            >
                              <ListItemButton sx={{ padding: "8px 15px" , marginBottom:'2px'}}>
                                <ListItemText primary={floor.name} />
                              </ListItemButton>
                              <Divider sx={{ margin: "5px 0" }} />
                            </ListItem>
                          ))}
                      </List>
                    </AccordionDetails>
                  </Accordion>
                ))}
            </AccordionDetails>
          </Accordion>
        ))}
    </Box>
  );
};

export default NavigationComponent;
