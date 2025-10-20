import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.tsx";
import { BrowserRouter } from 'react-router-dom';
import { ThemeProviderWrapper } from "@context/themeContext";
import { BusinessDataProvider } from "@context/businessData";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProviderWrapper >
        <BusinessDataProvider>
          <App />
        </BusinessDataProvider>
      </ThemeProviderWrapper>
    </BrowserRouter>
  </StrictMode>,
);
