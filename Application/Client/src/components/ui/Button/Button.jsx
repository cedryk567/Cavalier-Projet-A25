import "./Button.css";
const Button = ({ contenue, style }) => {
  return <button  className={style}>{contenue}</button>;
};
export default Button;
