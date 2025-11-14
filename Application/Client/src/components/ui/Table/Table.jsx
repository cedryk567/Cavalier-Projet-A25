import Button from "../Button/Button";
import "./Table.css";
import EditSvg from "../../../img/EditSVG";
import DeleteSVG from "../../../img/DeleteSVG";
const Table = ({
  tableAffiche,
  setModalAffiche,
  setTableModifier,
  setFiltreBlurry,
}) => {
  if (!tableAffiche || tableAffiche.length === 0) {
    return (
      <>
        <div>En Chargement...</div>
      </>
    );
  }
  const rowKeys = Object.keys(tableAffiche[0]);
  return (
    <table className="Table">
      <thead className="Header">
        <tr>
          {rowKeys.map((header, i) => (
            <th key={i}>{header}</th>
          ))}
          <th>Modifier</th>
          <th>Supprimer</th>
        </tr>
      </thead>

      <tbody>
        {tableAffiche.map((row, i) => (
          <tr key={i}>
            {rowKeys.map((key, j) => (
              <td key={j}>{row[key]}</td>
            ))}
            <td>
              <Button
                style={"buttonTable"}
                onClick={() => {
                  console.log(row);
                  setModalAffiche(true);
                  setTableModifier(row);
                  setFiltreBlurry();
                }}
                contenue={EditSvg()}
              ></Button>
            </td>
            <td>
              <Button
                style={"buttonTable"}
                onClick={() => {}}
                contenue={DeleteSVG()}
              ></Button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
