import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import App from "./App.tsx";
import "./index.css";
import theme from "./components/theme.ts";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Button } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material/styles";

const muiTheme = createTheme();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={muiTheme}>
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <QueryClientProvider client={new QueryClient()}>
          <App />
        </QueryClientProvider>
      </ChakraProvider>
    </ThemeProvider>
  </React.StrictMode>
);

// import React from "react";
// import ReactDOM from "react-dom/client";
// import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
// import App from "./App";
// import theme from './components/theme'
// import './index.css'

// ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
//   <React.StrictMode>
//     <ChakraProvider theme={theme}>
//       <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
//       <App />
//     </ChakraProvider>
//   </React.StrictMode>
// );
