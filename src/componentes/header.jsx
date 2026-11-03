function Header() {
  return (
    <header style={{ 
      display: "flex", 
      justifyContent: "center", 
      paddingBottom: "25px", 
      marginBottom: "35px", 
      borderBottom: "2px solid #f1f5f9" 
    }}>
      <h1 style={{ 
        margin: 0, 
        fontSize: "2.2rem", 
        color: "#0f172a", 
        fontWeight: "800", 
        letterSpacing: "-0.5px" 
      }}>
        Mi primera app
      </h1>
    </header>
  );
}
export default Header;