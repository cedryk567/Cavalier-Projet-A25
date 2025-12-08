import Button from "../Button/Button";
import "./Table.css";
import EditSvg from "../../../img/EditSVG";
import DeleteSVG from "../../../img/DeleteSVG";
import { useEffect, useRef, useState } from "react";

const Table = ({
  tableAffiche,
  setModalAffiche,
  setTableModifier,
  setFiltreBlurry,
  setTypeFonctionModal
}) => {
  const tbodyRef = useRef(null);
  useEffect(() => {
    console.log(tbodyRef);
  }, [tbodyRef]);
  if (!tableAffiche || tableAffiche.length === 0) {
    return (
      <>
        <div>En Chargement...</div>
      </>
    );
  }
  const rowKeys = Object.keys(tableAffiche[0]);
  return (
    <div className="TableContainer">
      <table className="Table">
        <thead className="Header">
          <tr>
            {rowKeys.slice(1).map((header, i) => (
              <th key={i}>{header}</th>
            ))}
            <th>Modifier</th>
            <th>Supprimer</th>
          </tr>
        </thead>

        <tbody>
          {tableAffiche.map((row, i) => (
            <tr key={i}>
              {rowKeys.slice(1).map((key, j) => (
                <td key={j}>{row[key]}</td>
              ))}
              <td>
                <Button
                  style={"buttonTable"}
                  onClick={() => {
                    console.log(row);
                    setTypeFonctionModal("Modifier")
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
    </div>
  );
};

export default Table;
