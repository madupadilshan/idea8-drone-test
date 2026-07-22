// ============================================================================
// config.example.js — template for config.js (which is gitignored and never
//               committed because it holds real credentials).
//
// To use: copy this file to "config.js" (same folder as pilot.html /
// m3m_dashboard.html) and fill in your real values.
//
//   Windows (PowerShell):  Copy-Item config.example.js config.js
//   macOS/Linux:           cp config.example.js config.js
// ============================================================================
window.APP_CONFIG = {

  // ---- DJI Cloud API app (used by pilot.html) ------------------------------
  appId:       "REPLACE_ME",
  appKey:      "REPLACE_ME",
  appLicense:  "REPLACE_ME",

  // Workspace id MUST be a valid UUID (Pilot 2 calls UUID.fromString on it).
  workspaceId: "a1b2c3d4-5e6f-4a7b-8c9d-0e1f2a3b4c5d",

  // ---- MQTT broker ---------------------------------------------------------
  brokerHost:  "your-broker-host.example.com",
  brokerPort:  "8883",
  brokerTls:   true,

  brokerWsUrl: "wss://your-broker-host.example.com:443/mqtt",

  // Broker login (both sides).
  mqttUser:    "REPLACE_ME",
  mqttPass:    "REPLACE_ME",
  clientPrefix:"djidock",

  // ---- Live video (dashboard) ----------------------------------------------
  mediaHost:   "192.168.1.225"
};
