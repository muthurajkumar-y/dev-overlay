const originalFetch = window.fetch;

window.fetch = async (...args) => {
  const startTime = performance.now();

  const input = args[0];

  const url =
    typeof input === "string"
      ? input
      : input instanceof URL
        ? input.toString()
        : input.url;

  const method =
    args[1]?.method ??
    (input instanceof Request ? input.method : "GET");

  try {
    const response = await originalFetch(...args);

    const duration = Math.round(performance.now() - startTime);

    window.dispatchEvent(
      new CustomEvent("dev-overlay-network", {
        detail: {
          id: crypto.randomUUID(),
          method,
          url,
          status: response.status,
          duration,
          timestamp: Date.now(),
        },
      }),
    );

    return response;
  } catch (error) {
    const duration = Math.round(performance.now() - startTime);

    window.dispatchEvent(
      new CustomEvent("dev-overlay-network", {
        detail: {
          id: crypto.randomUUID(),
          method,
          url,
          duration,
          timestamp: Date.now(),
        },
      }),
    );

    throw error;
  }
};