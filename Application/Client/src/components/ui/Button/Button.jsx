import "./Button.css";
function Button({ contenue, gererClic }) {
  return (
    <>
      <button id="connexionBtn" onClick={gererClic}>
        {contenue}
      </button>
    </>
  );
}
export default Button;
