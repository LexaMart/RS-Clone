import React from "react";
import "./settingsMessage.css";
import { NavLink } from "react-router-dom";
import AuthContext from "../../../context/AuthContext";

const FontSizeMessage = ({ active, setActive }) => (
  <AuthContext.Consumer>
    {(context) => (
      <>
        <div
          className="settings-message"
          style={active ? { left: 0 } : { left: -8000 }}
        >
          <p>{context.state.fontSizeColor}</p>
          <p>{context.state.fontSizeColorHotkeys}</p>
        </div>
        <NavLink
          className="settings-shadow"
          to="/settings"
          style={active ? { display: "block" } : { display: "none" }}
          onClick={() => {
            setActive(false);
          }}
        />
      </>
    )}
  </AuthContext.Consumer>
);

export default FontSizeMessage;
