export function Overlay() {
  return (
    <div
      style={{
        position: "fixed",
        top: "20px",
        right: "20px",
        width: "500px",
        height: "600px",
        zIndex: 2147483647,
        background: "#ffffff",
        color: "#111827",
        border: "1px solid #d1d5db",
        borderRadius: "10px",
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.25)",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "12px 16px",
          borderBottom: "1px solid #e5e7eb",
          fontWeight: 600,
        }}
      >
        <span>Dev Overlay</span>

        <button
          type="button"
          style={{
            border: "none",
            background: "transparent",
            fontSize: "20px",
            cursor: "pointer",
          }}
        >
          ×
        </button>
      </div>

      <div style={{ padding: "16px" }}>
        <h3>API Requests</h3>
        <p style={{ color: "#6b7280" }}>
          Network requests will appear here.
        </p>
      </div>
    </div>
  );
}