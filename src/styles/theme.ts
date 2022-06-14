import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    highlight: { 100: "#FFBA08", 50: "#FFBA0880" },
    dark: {
      black: "#000000",
      text: "#47585B",
      info: { 100: "#999999", 50: "#99999980" },
    },
    light: {
      white: "#FFFFFF",
      text: "#F5F8FA",
      info: "#DADADA",
    },
  },
  fonts: {
    body: "Poppins",
    heading: "Poppins",
  },
});
