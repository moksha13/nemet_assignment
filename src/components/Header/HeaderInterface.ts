export interface HeaderInterface {
    currentColor: string;
    currentShape: string;
    updateColor: (color: string) => void;
    updateShape: (shape: string) => void;
    toggleMode: () => void;
  }