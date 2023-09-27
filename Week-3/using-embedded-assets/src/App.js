import escudo_ipn from "./assets/images/escudo_ipn.jpg";
import "./App.css";

function App() {
  const escudo_ipn_formato3 =
    "https://www.mexicodesconocido.com.mx/wp-content/uploads/2019/07/ipn_instituto_polite%CC%81cnico_nacional.jpg";
  return (
    <div className="App">
      <h1>Forma 1 de importar imagenes</h1>
      <img height={200} src={escudo_ipn} alt="Imagen del escupo del IPN" />
      <h1>Forma 2 de importar imagenes</h1>
      <img
        height={200}
        src={require("./assets/images/escudo_ipn.jpg")}
        alt="Imagen del escupo del IPN"
      />
      <h1>Forma 3 de importar imagenes</h1>
      <img
        height={200}
        src={escudo_ipn_formato3}
        alt="Imagen del escupo del IPN"
      />
    </div>
  );
}

export default App;
