import { defineManifest } from "@crxjs/vite-plugin";

export default defineManifest({
  manifest_version: 3,
  name: "Dev Overlay",
  version: "0.1.0",
  description: "Developer overlay for monitoring API calls",

  action: {
  default_title: "Dev Overlay",
  default_popup: "index.html"
},

  permissions: [],

  host_permissions: ["<all_urls>"],

  background: {
    service_worker: "src/background/background.ts",
    type: "module"
  },

  content_scripts: [
    {
      matches: ["<all_urls>"],
      js: ["src/content/content.ts"]
    }
  ]
});