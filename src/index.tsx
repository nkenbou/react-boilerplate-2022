import React from "react";
import { createRoot } from "react-dom/client";
import styles from "./style.module.scss";

const container = document.getElementById("root");
if (container) {
  const root = createRoot(container);
  root.render(<div className={styles.highlight}>Hello, world!</div>);
}
