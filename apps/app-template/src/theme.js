// theme.js
import { extendTheme } from "@chakra-ui/react";

// Black-to-white grayscale as "brand"
const colors = {
  brand: {
    50: "#f9f9f9",
    100: "#e0e0e0",
    200: "#c6c6c6",
    300: "#a8a8a8",
    400: "#8b8b8b",
    500: "#383838", // Primary UI color
    600: "#4f4f4f",
    700: "#383838",
    800: "#222222",
    900: "#0f0f0f", // Near black
  },
};

// Force Chakra components to use this monochrome theme
const components = {
  Button: {
    defaultProps: {
      colorScheme: "brand",
    },
  },
  Badge: {
    defaultProps: {
      colorScheme: "brand",
    },
  },
  Switch: {
    defaultProps: {
      colorScheme: "brand",
    },
  },
  Progress: {
    defaultProps: {
      colorScheme: "brand",
    },
  },
  Tabs: {
    defaultProps: {
      colorScheme: "brand",
    },
  },
  Checkbox: {
    defaultProps: {
      colorScheme: "brand",
    },
  },
  Radio: {
    defaultProps: {
      colorScheme: "brand",
    },
  },
};

const styles = {
  global: {
    body: {
      bg: "brand.50",
      color: "brand.900",
    },
  },
};

const theme = extendTheme({ colors, components, styles });

export default theme;
