const DatosClima = ({ clima }) => {
    return (
      <div className="m-4">
        {clima.name && clima.main && (
          <p>
            La temperatura en {clima.name} es de {clima.main.temp}°C, con una humedad del {clima.main.humidity}%.
          </p>
        )}
      </div>
    );
  };
  
  export default DatosClima;
