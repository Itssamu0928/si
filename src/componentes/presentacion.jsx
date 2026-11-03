function WireframeBox({ height }) {
  return (
    <div style={{
      border: "2px dashed #cbd5e1",
      borderRadius: "16px",
      position: "relative",
      width: "100%",
      height: height,
      backgroundColor: "#f8fafc",
      boxSizing: "border-box",
      overflow: "hidden"
    }}>
      <svg style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }} preserveAspectRatio="none">
        <line x1="0" y1="0" x2="100%" y2="100%" stroke="#94a3b8" strokeWidth="1.5" />
        <line x1="100%" y1="0" x2="0" y2="100%" stroke="#94a3b8" strokeWidth="1.5" />
      </svg>
    </div>
  );
}

function Presentacion() {
  return (
    <main style={{ display: "flex", flexDirection: "column", gap: "25px" }}>
      <h2 style={{ margin: 0, color: "#475569", fontSize: "1.4rem", fontWeight: "600" }}>
        Presentado por: Samuel López
      </h2>
      
      {/* Caja grande superior */}
      <WireframeBox height="350px" />

      {/* Fila de 3 cajas inferiores responsiva */}
      <div style={{ display: "flex", gap: "20px", justifyContent: "space-between", flexWrap: "wrap" }}>
        <div style={{ flex: "1 1 30%", minWidth: "200px" }}><WireframeBox height="180px" /></div>
        <div style={{ flex: "1 1 30%", minWidth: "200px" }}><WireframeBox height="180px" /></div>
        <div style={{ flex: "1 1 30%", minWidth: "200px" }}><WireframeBox height="180px" /></div>
      </div>
    </main>
  );
}
export default Presentacion;