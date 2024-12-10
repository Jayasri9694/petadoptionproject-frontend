import React from "react";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
