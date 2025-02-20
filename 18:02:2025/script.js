const mapa = new Map();
const productos = document.getElementById('productos');
const messageContainer = document.getElementById('mensaje');

productos.addEventListener('submit', function (event) {
    event.preventDefault();

    // Obtener los valores dentro del evento submit
    const codigo = document.getElementById("codigo").value;
    const nombre = document.getElementById("nombre").value;
    const precio = parseFloat(document.getElementById("precio").value);
    const stock = parseInt(document.getElementById("stock").value);
    const category = document.getElementById("category").value;

    // Verificar si el código ya existe
    if (mapa.has(codigo)) {
        showMessage('El código del producto ya existe', 'error');
    } else {
        // Crear el objeto producto
        const product = {
            codigo: codigo,
            nombre: nombre,
            precio: precio,
            stock: stock,
            category: category
        };

        // Agregar el producto al Map
        mapa.set(codigo, product);

        // Mostrar mensaje de éxito
        showMessage('Producto agregado correctamente', 'correcto');

        // Resetear el formulario
        productos.reset();
    }
});

function showMessage(message, type) {
    const messageContainer = document.getElementById('mensaje'); // Asegurar que el contenedor existe
    if (!messageContainer) return;

    const messageElement = document.createElement('div');
    messageElement.classList.add('mensaje', type); // Clases corregidas según el CSS
    messageElement.textContent = message;
    messageContainer.appendChild(messageElement);

    setTimeout(() => {
        messageElement.classList.add('mostrar'); // Clase corregida según el CSS
    }, 100);

    setTimeout(() => {
        messageElement.classList.remove('mostrar');
        setTimeout(() => {
            messageElement.remove();
        }, 500);
    }, 3000);
}
