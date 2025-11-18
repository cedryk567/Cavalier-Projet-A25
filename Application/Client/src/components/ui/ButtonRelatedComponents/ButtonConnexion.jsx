import "./ButtonConnexion.css";
function ButtonConnexion({ contenue, action }) {
  return (
    <>
      <button id="connexionBtn" onClick={action}>
        {contenue}
      </button>
    </>
  );
}
export default ButtonConnexion;
