import { useState } from "react";
function MessageUtilisateur({ status, message }) {
  const [count, setCount] = useState(0);
  if (!status && message) {
    return;
  }
  if (status > 200) {
    return (
      <>
        <div className="">
          <p>{message}</p>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="">
          <p>{message}</p>
        </div>
      </>
    );
  }
}

export default MessageUtilisateur;
