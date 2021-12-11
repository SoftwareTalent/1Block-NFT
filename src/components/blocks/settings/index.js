import React from "react";
import { ReactSVG } from "react-svg";

function Settings() {
  return (
    <>
      <div className="setting">
        <p>
          <span>Username</span>
          <span>user98</span>
          <span>Edited</span>
        </p>
        <p>
          <span>Password</span>
          <div style={{ color: "white" }}>
            <span>••••••••</span>
            <i className="fa fa-pencil"></i>
            <span style={{ padding: "0" }}>Editing</span>
          </div>
        </p>
        <p>
          <span style={{ marginRight: "30px" }}>Email</span>
          <span>will@hodlstudios.com</span>
        </p>
        <div className="checkbox">
          <input type="checkbox"></input>
          <span>Subscribe to newsletter</span>
        </div>
        <p style={{ padding: "0" }}>
          Enter your e-mail to manage your subscription preferences.
        </p>
      </div>
    </>
  );
}

export default Settings;
