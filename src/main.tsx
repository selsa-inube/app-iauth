import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.tsx";
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from "styled-components";
import { tokens } from "./test/tokens.ts"; 

const theme = {
  button: tokens
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}> 
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
);
