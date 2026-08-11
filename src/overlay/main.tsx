import { createRoot } from "react-dom/client";
import { Overlay } from "./Overlay";

const rootElement = document.createElement("div");

rootElement.id = "dev-overlay-root";

document.body.appendChild(rootElement);

createRoot(rootElement).render(<Overlay />);