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
    console.log("DevOverlay button clicked");
  });

  document.body.appendChild(button);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", createFloatingButton);
} else {
  createFloatingButton();
}