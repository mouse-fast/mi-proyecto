let contadorCarrito = 0;

function agregarAlCarrito(nombreProducto) {
    contadorCarrito++;
    alert(`¡Has añadido "${nombreProducto}" al carrito con éxito!`);
    
    const botonCarrito = document.getElementById('cart-btn');
    if (botonCarrito) {
        botonCarrito.innerText = `Carrito (${contadorCarrito})`;
    }
}