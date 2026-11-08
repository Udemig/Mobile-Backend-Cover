import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { TemaSaglayici } from "./context/TemaContext.jsx";

createRoot(document.getElementById("root")).render(
  <TemaSaglayici>
    <App />
  </TemaSaglayici>,
);
