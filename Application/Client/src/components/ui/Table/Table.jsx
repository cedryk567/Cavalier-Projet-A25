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
    <table className="Table">
      <thead className="Header">
        <tr>
          {rowKeys.map((header, i) => (
            <th key={i}>{header}</th>
          ))}
        </tr>
      </thead>

      <tbody>
        {tableAffiche.map((row, i) => (
          <tr key={i}>
            {rowKeys.map((key, j) => (
              <td key={j}>{row[key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
