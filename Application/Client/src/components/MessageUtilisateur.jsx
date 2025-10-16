import { useState } from "react";
import ErreurSVG from "../img/ErreurSVG.jsx";
import SuccesSVG from "../img/SuccesSVG.jsx";
function MessageUtilisateur({ status, message }) {
  const styleSucces = {
    backgroundColor: "rgba(0, 128, 0, 0.4)",
    padding: "10px",
    borderRadius: "8px",
    marginTop: "10px",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    paddingLeft: "46px",
    paddingRight: "46px",
  };
  const styleErreur = {
    backgroundColor: "rgba(220, 53, 69, 0.4)",
    borderRadius: "8px",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    paddingBottom: "5px",
    paddingTop: "5px",
    paddingLeft: "60px",
    paddingRight: "60px",
  };
  console.log(`status : ${status}`);
  console.log(`message : ${message}`);

  if (!status && !message) {
    return;
  }
  if (status === 200) {
    return (
      <>
        <div style={styleSucces}>
          {SuccesSVG()}
          <span>{message}</span>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div style={styleErreur}>
          {ErreurSVG()}
          <div>{message}</div>
        </div>
      </>
    );
  }
}

export default MessageUtilisateur;
