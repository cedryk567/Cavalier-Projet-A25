import "./TextArea.css";
const TextArea = ({ textRecherche, setTextRecherche, style }) => {
  return (
    <textarea
      name="text"
      className={style}
      value={textRecherche}
      onChange={(e) => {
        setTextRecherche(e.target.value);
      }}
    ></textarea>
  );
};
export default TextArea;
