import "./TextArea.css";
const TextArea = ({ value, onChange, style, placeHolder }) => {
  return (
    <textarea
      rows={1}
      name="text"
      className={`${style} textArea`}
      value={value}
      onChange={onChange}
    ></textarea>
  );
};
export default TextArea;
