import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import FormUbicacion from "./components/FormUbicacion";

function App() {
  return <Container className="text-center mainPage">
    <h1 className="display-5 text-center my-5">Clima</h1>
    <FormUbicacion/>
  </Container>;
}

export default App;
