import { Temporal } from "@js-temporal/polyfill";
import "./Calendrier.css";
import React, { useState, useEffect } from "react";
import { getDateCalendrier } from "../getDateCalendrier.jsx";

import { CalendrierVue } from "../models/CalendrierVue.jsx";
import { NavbarCalendrier } from "./nav/NavbarCalendrier.jsx";

import { useContext } from "react";
import { CalendrierProvider } from "../context/CalendrierContext.jsx";

function Calendrier() {
  return (
    <CalendrierProvider>
      <div className="calendrier-container">
        <NavbarCalendrier />
        <div className="vue">
          <CalendrierVue />
        </div>
      </div>
    </CalendrierProvider>
  );
}
export default Calendrier;
