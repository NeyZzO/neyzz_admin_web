import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { VisibilityProvider } from "./providers/VisibilityProvider.tsx";
import App from "./App.tsx";
import "./index.scss";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <VisibilityProvider>
            <App />
        </VisibilityProvider>
    </StrictMode>
);
