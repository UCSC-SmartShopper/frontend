import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material/styles";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import theme from "./components/theme.ts";
import "./index.css";

const muiTheme = createTheme();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    {/* For Chakra UI */}
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />

      {/* For Material UI */}
      <ThemeProvider theme={muiTheme}>
        <QueryClientProvider client={new QueryClient()}>
          <App />
        </QueryClientProvider>
      </ThemeProvider>
    </ChakraProvider>
  </React.StrictMode>
);
