document.addEventListener("DOMContentLoaded", () => {
    const contenedor = document.getElementById("contenedor-precios");

    // Lista oficial de tus servicios de HG Detailing
    const servicios = [
        {
            nombre: "HG Fast (Carros Pequeños)",
            precio: "$50.000",
            descripcion: "Lavado rápido y eficiente para autos compactos. Limpieza exterior profunda y aspirado básico."
        },
        {
            nombre: "HG Fast (Carros Grandes)",
            precio: "$70.000",
            descripcion: "Lavado rápido optimizado para camionetas y SUVs. Limpieza exterior premium y aspirado básico."
        },
        {
            nombre: "HG Biker",
            precio: "$25.000",
            descripcion: "Cuidado especializado para motocicletas. Lavado detallado, desengrasado de cadena y abrillantado."
        },
        {
            nombre: "Elite",
            precio: "Precio Variable",
            descripcion: "Servicio premium personalizado de detallado profundo. El costo final se define bajo diagnóstico según el estado del vehículo."
        }
    ];

    // Generar las tarjetas en la pantalla directamente
    servicios.forEach(servicio => {
        const tarjeta = document.createElement("div");
        tarjeta.classList.add("tarjeta-servicio");

        tarjeta.innerHTML = `
            <h3>${servicio.nombre}</h3>
            <p class="precio">${servicio.precio}</p>
            <p class="descripcion">${servicio.descripcion}</p>
            <a href="https://wa.me{encodeURIComponent(servicio.nombre)}" class="btn-cotizar" target="_blank">Cotizar Servicio</a>
        `;

        contenedor.appendChild(tarjeta);
    });
});
