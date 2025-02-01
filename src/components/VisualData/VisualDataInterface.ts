interface Floorplan {
    floorName: string;
    floorImage: string;
  }
  
export interface VisualContentProps {
    floorplan: Floorplan;
    isToggle: boolean;
  }