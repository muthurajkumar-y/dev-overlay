import type { ApiRequest } from "../shared/types";

interface OverlayProps {
  requests: ApiRequest[];
}

export function Overlay({ requests }: OverlayProps) {
  return (
    <div
      style={{
        position: "fixed",
        top: "20px",
        right: "20px",
        width: "600px",
        height: "500px",
        zIndex: 2147483647,
        background: "#ffffff",
        color: "#111827",
        border: "1px solid #d1d5db",
        borderRadius: "10px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
        fontFamily: "Arial, sans-serif",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          padding: "12px 16px",
          borderBottom: "1px solid #e5e7eb",
          fontWeight: 600,
        }}
      >
        Dev Overlay
      </div>

      <div style={{ padding: "12px", overflowY: "auto", height: "440px" }}>
        {requests.length === 0 ? (
          <p>No API requests captured yet.</p>
        ) : (
          requests.map((request) => (
            <div
              key={request.id}
              style={{
                padding: "10px",
                marginBottom: "8px",
                border: "1px solid #e5e7eb",
                borderRadius: "6px",
              }}
            >
              <strong>{request.method}</strong>{" "}
              <span>{request.url}</span>

              <div style={{ marginTop: "5px", fontSize: "12px" }}>
                Status: {request.status ?? "ERROR"} |{" "}
                Time: {request.duration ?? "-"} ms
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}