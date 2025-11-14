import "./TextArea.css";
const TextArea = ({ textRecherche, setTextRecherche, style, placeHolder }) => {
  return (
    <textarea
      defaultValue={placeHolder}
      name="text"
      className={`${style} textArea`}
      value={textRecherche}
      onChange={(e) => {
        setTextRecherche(e.target.value);
      }}
    ></textarea>
  );
};
export default TextArea;
