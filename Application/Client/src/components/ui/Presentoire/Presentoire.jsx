import "./Presentoire.css";

const textes = [
  "Nombre d'étudiant",
  "Nombre de coach",
  "Nombre de compte pas activé",
];

const Presentoire = ({ items }) => {
  return (
    <div className="ContainerPresentoire">
      {items?.map((item, i) => (
        <div className={`itemPresente${i}`} key={i}>
          <span className="titreCase">{textes[i]}</span>
          <div className="elementCase">
            <span className="element">{item}</span>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Presentoire;
