function Footer() {
  return (
    <footer style={{ 
      display: "flex", 
      justifyContent: "space-between", 
      alignItems: "center", 
      paddingTop: "25px", 
      marginTop: "40px", 
      borderTop: "2px solid #f1f5f9",
      color: "#64748b" 
    }}>
      <p style={{ margin: 0, fontSize: "1.05rem", fontWeight: "500" }}>
        Proyecto creado por Samuel López
      </p>
      
      {/* Estilo de "botón" para el logo */}
      <div style={{
        backgroundColor: "#0f172a",
        color: "white",
        padding: "10px 20px",
        borderRadius: "10px",
        fontWeight: "bold",
        letterSpacing: "1px",
        fontSize: "1.1rem"
      }}>
        LOGO
      </div>
    </footer>
  );
}
export default Footer;