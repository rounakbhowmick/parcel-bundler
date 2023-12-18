import React from "react";
import { createRoot } from "react-dom/client";
import DataComp from "./app/components/DataComp";
// import DataComp from "./app/components/DataComp";

const container = document.getElementById("root");
if (container) {
  const root = createRoot(container);
  root.render(<DataComp />);
} else {
  console.error("Root container not found");
}
