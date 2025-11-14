import { BarChart } from "@mui/x-charts/BarChart";
import { sportConfig } from "../donnees/faussesStats";
import "./GraphiqueStats.css";

function GraphiqueStats({ sport, data }) {
  const { dataKey, xKey, label, nomAxe } = sportConfig[sport] || {};

  const largeurBasique = 600; //Largeur de base minimum
  const largeurExtraParBarre = 100; //Ajouter lorqu'il y a plus de barres
  const largeurGraphic = Math.max(
    largeurBasique,
    200 + data.length * largeurExtraParBarre
  );

  if (!dataKey || !xKey) {
    return (
      <p style={{ color: "white" }}>
        Aucune configuration trouvée pour {sport}
      </p>
    );
  }

  return (
    <div className="graphique-container">
      {/* Titre au-dessus */}
      <h3 className="graphique-titre">{label}</h3>

      {/* Graphique */}
      <div className="graphique-wrapper">
        <BarChart
          dataset={data}
          xAxis={[
            {
              dataKey: xKey,
              scaleType: "band",
              tickLabelStyle: { fontSize: 12, fill: "#e5e5e5" },
              lineColor: "#e5e5e5",
            },
          ]}
          yAxis={[
            {
              tickLabelStyle: { fontSize: 12, fill: "#e5e5e5" },
              lineColor: "#e5e5e5",
            },
          ]}
          series={[
            {
              dataKey: dataKey,
              label: label,
              color: "#4ade80",
            },
          ]}
          grid={{ horizontal: true, color: "#333" }}
          width={largeurGraphic}
          height={300}
          margin={{ top: 20, right: 20, left: 60, bottom: 40 }}
          sx={{
            "& .MuiChartsLegend-root": { display: "none" },
            "& .MuiChartsAxis-line": { stroke: "#666" },
            "& .MuiChartsAxis-tickLabel": { fill: "#e5e5e5" },
          }}
        />

        {/* Axis Y */}
        <div className="axe-y-label">{nomAxe}</div>

        {/* Axis X */}
        <div className="axe-x-label">
          {xKey === "nom" ? "Epreuve" : "Adversaire"}
        </div>
      </div>
    </div>
  );
}

export default GraphiqueStats;
