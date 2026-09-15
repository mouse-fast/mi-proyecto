let contadorCarrito = 0;

function agregarAlCarrito() {
    contadorCarrito++;
    const botonCarrito = document.getElementById("cart-btn");
    botonCarrito.textContent = `Carrito (${contadorCarrito})`;
    
    // Alerta visual de confirmación para la demostración
    alert("¡Producto añadido al carrito con éxito! Simulación de compra en curso.");
}