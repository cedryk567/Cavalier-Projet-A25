import "./Presentoire.css";
const Presentoire = ({ items }) => {
  return (
    <div className="ContainerPresentoire">
      {items?.map((item, i) => (
        <div className={`itemPresente${i}`} key={i}>
          {item}
        </div>
      ))}
    </div>
  );
};
export default Presentoire;
