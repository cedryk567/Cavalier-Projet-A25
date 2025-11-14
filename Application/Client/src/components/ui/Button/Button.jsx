import "./Button.css";
const Button = ({ contenue, style, onClick }) => {
  return (
    <button
      onClick={() => {
        onClick();
      }}
      className={style}
    >
      {contenue}
    </button>
  );
};
export default Button;
