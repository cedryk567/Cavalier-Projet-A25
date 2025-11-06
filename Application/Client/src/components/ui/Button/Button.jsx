import "./Button.css";
function Button({ contenue, action }) {
  return (
    <>
      <button id="connexionBtn" onClick={action}>
        {contenue}
      </button>
    </>
  );
}
export default Button;
