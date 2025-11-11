import "./Table.css";
const Table = ({ tableAffiche }) => {
  if (!tableAffiche || tableAffiche.length === 0) {
    return (
      <>
        <div>En Chargement...</div>
      </>
    );
  }
  console.log(tableAffiche);
  const rowKeys = Object.keys(tableAffiche[0]);
  return (
    <>
      <table className="Table">
        {rowKeys.map((header, i) => (
          <th key={i}>{header}</th>
        ))}
        <tr>
          {tableAffiche.map((row, i) => (
            <div key={i}>
              {rowKeys.map((key, j) => (
                <>
                  <td key={j}>{row[key]}</td>
                </>
              ))}
            </div>
          ))}
        </tr>
      </table>
    </>
  );
};

export default Table;
