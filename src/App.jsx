import Header from "./componentes/header";
import Presentacion from "./componentes/presentacion";
import Footer from "./componentes/footer";

function App() {
  return (
    <div style={{ maxWidth: "900px", margin: "0 auto", padding: "20px", fontFamily: "sans-serif" }}>
      <Header />
      <Presentacion />
      <Footer />
    </div>
  );
}
export default App;