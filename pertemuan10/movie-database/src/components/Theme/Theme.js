// const theme = {
  // COLORS THEME
  // colors: {
  //   primary: "#4361ee",
  //   secondary: "#b5179e",
  // },

  // Others: padding, margin, size
// };

// export default theme;
// theme.js

import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      500: "#2f3e46",
      600: "#52b788",
      700: "#64748b",
    },
  },
});

export default theme;
