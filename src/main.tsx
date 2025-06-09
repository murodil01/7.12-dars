import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import "@ant-design/v5-patch-for-react-19";
import "./index.css";
import { Toaster } from "react-hot-toast";

const rootElement = document.getElementById("root");

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <RouterProvider router={router} />
      <Toaster position="top-center"/>
    </StrictMode>
  );
}
