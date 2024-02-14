import { Form, Button, Spinner } from "react-bootstrap";
import { useState } from "react";
import DatosClima from "./DatosClima";
import Swal from "sweetalert2";

const FormUbicacion = () => {
  const [clima, setClima] = useState({});
  const [ubicacion, setUbicacion] = useState("");
  const [pais, setPais] = useState("");
  const [mostrarSpinner, setMostrarSpinner] = useState(false);

  const consultarAPI = async () => {
    try {
      setMostrarSpinner(true);
      const respuesta = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${ubicacion},${pais}&appid=2e69862fab7b05d5d77f90b87697096e&units=metric`
      );
      const datos = await respuesta.json();

      if (datos.cod === "404") {
        Swal.fire({
          title: "Error!",
          text: "No se encontraron datos para la ubicación ingresada.",
          icon: "error",
          confirmButtonText: "Continuar",
        });
      } else {
        setClima(datos);
      }

      setMostrarSpinner(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (ubicacion === "" || pais === "") {
      alert("Por favor, ingrese la ubicación y el país.");
      return;
    }

    consultarAPI();
  };

  const mostrarComponente = mostrarSpinner ? (
    <div className="my-5">
      <Spinner animation="border" variant="danger" />
    </div>
  ) : (
    <DatosClima clima={clima} />
  );

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="ubicacionInput">
          <Form.Label>Ingrese la ubicación</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ubicación"
            minLength={5}
            maxLength={50}
            required
            onChange={(e) => setUbicacion(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="paisInput">
          <Form.Label>Ingrese el país</Form.Label>
          <Form.Control
            type="text"
            placeholder="País"
            minLength={5}
            maxLength={50}
            required
            onChange={(e) => setPais(e.target.value)}
          />
        </Form.Group>
        <Button type="submit">Consultar</Button>
      </Form>
      {mostrarComponente}
    </div>
  );
};

export default FormUbicacion;
