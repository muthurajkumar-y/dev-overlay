import React from "react";
import { createRoot } from "react-dom/client";
import { Overlay } from "./Overlay";

const container = document.createElement("div");

container.id = "dev-overlay-root";

document.body.appendChild(container);

createRoot(container).render(
  <React.StrictMode>
    <Overlay />
  </React.StrictMode>,
);