import { createRoot } from "react-dom/client";
import { Overlay } from "../overlay/Overlay";
import { installFetchInterceptor } from "../services/networkInterceptor";
import type { ApiRequest } from "../shared/types";
import { useEffect, useState } from "react";
const BUTTON_ID = "dev-overlay-toggle";

function createFloatingButton(): void {
  if (document.getElementById(BUTTON_ID)) {
    return;
  }

  const button = document.createElement("button");

  button.id = BUTTON_ID;
  button.textContent = "🛠 DevOverlay";

  Object.assign(button.style, {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    zIndex: "2147483647",
    padding: "10px 14px",
    border: "none",
    borderRadius: "8px",
    background: "#111827",
    color: "#ffffff",
    fontSize: "14px",
    fontFamily: "Arial, sans-serif",
    cursor: "pointer",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.25)",
  });

  button.addEventListener("click", () => {
    const existingOverlay = document.getElementById("dev-overlay-root");

    if (existingOverlay) {
      existingOverlay.remove();
      return;
    }

    const container = document.createElement("div");

    container.id = "dev-overlay-root";

    document.body.appendChild(container);

    createRoot(container).render(<OverlayContainer />);
  });

  installFetchInterceptor((request) => {
  console.log("🌐 API Request:", request);
});

  document.body.appendChild(button);
}



if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", createFloatingButton);
} else {
  createFloatingButton();
}





function OverlayContainer() {
  const [requests, setRequests] = useState<ApiRequest[]>([]);

  useEffect(() => {
    const handleNetworkRequest = (event: Event) => {
      const customEvent = event as CustomEvent<ApiRequest>;

      setRequests((previous) => [
        ...previous,
        customEvent.detail,
      ]);
    };

    window.addEventListener(
      "dev-overlay-network",
      handleNetworkRequest,
    );

    return () => {
      window.removeEventListener(
        "dev-overlay-network",
        handleNetworkRequest,
      );
    };
  }, []);

  return <Overlay requests={requests} />;
}