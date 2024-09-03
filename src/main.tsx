import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { TerminalContextProvider } from "react-terminal";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TerminalContextProvider>
      <App />
    </TerminalContextProvider>
  </StrictMode>
);
