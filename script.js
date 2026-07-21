// 1. Inyectar estilos CSS para las tarjetas y el contenedor
const estilos = document.createElement("style");
estilos.textContent = `
  #contenedor-servicios {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
    padding: 20px;
    font-family: sans-serif;
  }
  .tarjeta-servicio {
    border: 1px solid #e0e0e0;
    border-radius: 12px;
    padding: 24px;
    background: #ffffff;
    box-shadow: 0 4px 6px rgba(0,0,0,0.05);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: transform 0.2s, box-shadow 0.2s;
  }
  .tarjeta-servicio:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 15px rgba(0,0,0,0.1);
  }
  .tarjeta-servicio h3 {
    margin: 0 0 10px 0;
    color: #333333;
    font-size: 1.4rem;
  }
  .tarjeta-servicio .precio {
    font-size: 1.25rem;
    font-weight: bold;
    color: #2ecc71;
    margin: 0 0 15px 0;
  }
  .tarjeta-servicio .descripcion {
    color: #666666;
    font-size: 0.95rem;
    line-height: 1.5;
    margin: 0 0 20px 0;
    flex-grow: 1;
  }
  .btn-cotizar {
    display: block;
    text-align: center;
    background-color: #25d366;
    color: white;
    text-decoration: none;
    padding: 12px;
    border-radius: 8px;
    font-weight: bold;
    transition: background-color 0.2s;
  }
  .btn-cotizar:hover {
    background-color: #128c7e;
  }
`;
document.head.appendChild(estilos);

// 2. Generar las tarjetas en la pantalla directamente
const contenedor = document.getElementById("contenedor-servicios"); // Asegúrate de tener este ID en tu HTML

servicios.forEach(servicio => {
  const tarjeta = document.createElement("div");
  tarjeta.classList.add("tarjeta-servicio");
  
  tarjeta.innerHTML = `
    <h3>${servicio.nombre}</h3>
    <p class="precio">${servicio.precio}</p>
    <p class="descripcion">${servicio.descripcion}</p>
    <a href="https://wa.me{encodeURIComponent('Hola, me interesa cotizar el servicio: ' + servicio.nombre)}" class="btn-cotizar" target="_blank">Cotizar Servicio</a>
  `;
  
  contenedor.appendChild(tarjeta);
});
