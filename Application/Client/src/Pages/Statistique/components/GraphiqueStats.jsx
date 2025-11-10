import { BarChart } from "@mui/x-charts/BarChart";
import { sportConfig } from "../donnees/faussesStats";

function GraphiqueStats({ sport, data }) {
  const { dataKey, xKey, label, nomAxe } = sportConfig[sport] || {};

  if (!dataKey || !xKey) {
    return (
      <p style={{ color: "white" }}>
        Aucune configuration trouvée pour {sport}
      </p>
    );
  }

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "700px",
        margin: "auto",
        padding: "20px",
        color: "#e5e5e5",
        position: "relative",
      }}
    >
      {/* Titre au-dessus */}
      <h3
        style={{
          textAlign: "center",
          fontWeight: "700",
          marginBottom: "10px",
          color: "#ffffff",
        }}
      >
        {label}
      </h3>

      {/* Graphique */}
      <div style={{ position: "relative" }}>
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
          width={600}
          height={300}
          margin={{ top: 20, right: 20, left: 60, bottom: 40 }}
          sx={{
            "& .MuiChartsLegend-root": { display: "none" },
            "& .MuiChartsAxis-line": { stroke: "#666" },
            "& .MuiChartsAxis-tickLabel": { fill: "#e5e5e5" },
          }}
        />

        {/* Axis Y */}
        <div
          style={{
            position: "absolute",
            top: "0%",
            left: "15px",
            transformOrigin: "center",
            color: "#bcbcbc",
            fontSize: "13px",
          }}
        >
          {nomAxe}
        </div>

        {/* Axis X */}
        <div
          style={{
            position: "absolute",
            bottom: "-25px",
            width: "100%",
            textAlign: "center",
            color: "#bcbcbc",
            fontSize: "13px",
          }}
        >
          {xKey === "nom" ? "Epreuve" : "Adversaire"}
        </div>
      </div>
    </div>
  );
}

export default GraphiqueStats;
