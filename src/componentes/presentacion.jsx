// Tarjeta con imagen, título y texto descriptivo
function ImageCard({ src, alt, height, title, text }) {
  return (
    <div style={{
      width: "100%",
      borderRadius: "16px",
      overflow: "hidden",
      boxShadow: "0 8px 15px rgba(0,0,0,0.1)",
      border: "1px solid #e2e8f0",
      backgroundColor: "#ffffff",
      display: "flex",
      flexDirection: "column"
    }}>
      <div style={{ width: "100%", height: height }}>
        <img 
          src={src} 
          alt={alt} 
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block"
          }} 
        />
      </div>
      
      {/* Contenedor del texto de la tarjeta */}
      <div style={{ padding: "20px" }}>
        <h3 style={{ margin: "0 0 10px 0", color: "#1e293b", fontSize: "1.15rem" }}>
          {title}
        </h3>
        <p style={{ margin: 0, color: "#64748b", fontSize: "0.95rem", lineHeight: "1.5" }}>
          {text}
        </p>
      </div>
    </div>
  );
}

function Presentacion() {
  return (
    <main style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
      
      {/* Sección de introducción con texto */}
      <div>
        <h2 style={{ margin: "0 0 12px 0", color: "#475569", fontSize: "1.5rem", fontWeight: "600" }}>
          Presentado por: Samuel López
        </h2>
        <p style={{ margin: 0, color: "#64748b", fontSize: "1.1rem", lineHeight: "1.6", maxWidth: "850px" }}>
          ¡Hola! Bienvenido a mi primera aplicación en React. Este proyecto es una demostración de cómo 
          traducir un diseño estático en una interfaz web funcional. Aquí organizo mis principales intereses 
          y proyectos, combinando la estructuración de componentes con un diseño moderno y responsivo.
        </p>
      </div>
      
      {/* Imagen grande principal */}
      <ImageCard 
        height="350px" 
        src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80" 
        alt="Computador con código"
        title="Desarrollo Web y Software"
        text="Construyendo proyectos Full-Stack y explorando la creación de interfaces dinámicas con HTML, CSS, JavaScript y React."
      />

      {/* Fila de 3 tarjetas inferiores responsivas */}
      <div style={{ display: "flex", gap: "20px", justifyContent: "space-between", flexWrap: "wrap" }}>
        
        {/* Tarjeta 1 */}
        <div style={{ flex: "1 1 30%", minWidth: "250px" }}>
          <ImageCard 
            height="160px" 
            src="https://images.unsplash.com/photo-1587831990711-23ca6441447b?auto=format&fit=crop&w=600&q=80" 
            alt="Hardware de PC" 
            title="Hardware y Setups"
            text="Explorando el ensamblaje de equipos, sistemas de refrigeración y la optimización de componentes de alto rendimiento."
          />
        </div>
        
        {/* Tarjeta 2 */}
        <div style={{ flex: "1 1 30%", minWidth: "250px" }}>
          <ImageCard 
            height="160px" 
            src="https://images.unsplash.com/photo-1547619292-240402b5ae5d?auto=format&fit=crop&w=600&q=80" 
            alt="Automovilismo" 
            title="Motores y SimRacing"
            text="Pasión por los motores, el detallado automotriz y la cultura de la simulación de carreras virtuales."
          />
        </div>
        
        {/* Tarjeta 3 */}
        <div style={{ flex: "1 1 30%", minWidth: "250px" }}>
          <ImageCard 
            height="160px" 
            src="https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&w=600&q=80" 
            alt="Música y sonido" 
            title="Música y Audio"
            text="Acompañando las sesiones de código y conducción con buena música y la mejor calidad de sonido."
          />
        </div>
      </div>
    </main>
  );
}
export default Presentacion;