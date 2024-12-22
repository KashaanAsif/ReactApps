import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Nav } from "./Components/Nav.jsx";
import { Banner } from "./Components/Banner.jsx";
import { Phone } from "./Components/Phone.jsx";
import { Accessories } from "./Components/Accessories.jsx";

createRoot(document.getElementById("root")).render(
  <div>
    <Nav />
    <Banner />
    <h2>
      <strong>SmartPhones</strong>
    </h2>
    <Phone />
    <h2>
      <strong>Accessories</strong>
    </h2>
    <Accessories />
  </div>
);
