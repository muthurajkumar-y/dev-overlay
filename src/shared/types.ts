export interface ApiRequest {
  id: string;
  method: string;
  url: string;
  status?: number;
  duration?: number;
  timestamp: number;

  requestHeaders?: Record<string, string>;
  requestBody?: unknown;
  responseHeaders?: Record<string, string>;
  responseBody?: unknown;
}