import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import path from "path"; // Add this

export default defineConfig(({ mode }) => {
  // Load environment variables
  const env = loadEnv(mode, process.cwd(), "");

  // Map Vite's mode to environment-specific API URLs
  const API_URL =
    {
      DEV: env.VITE_API_URL_DEV,
      SIT: env.VITE_API_URL_SIT,
      NFT: env.VITE_API_URL_NFT,
      UAT: env.VITE_API_URL_UAT,
      PRD: env.VITE_API_URL_PRD,
    }[mode.toUpperCase()] || env.VITE_API_URL_DEV; // Default to DEV if mode is missing

  return {
    plugins: [react()],
    server: {
      port: 9000, // Set development server port
    },
    define: {
      API_URL: JSON.stringify(API_URL), // Expose API_URL to the app
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
    esbuild: {
      jsx: "automatic", // or "transform" if using classic React
      jsxImportSource: "@emotion/react", // required if using Emotion's JSX (used by Chakra)
    },
  };
});
