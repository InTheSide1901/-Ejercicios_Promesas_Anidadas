require('colors')

const productos = [{
  id: 1,
  nombreProducto: "Laptop",
  precio: 1200,
  stock: 10
},
{
  id: 2,
  nombreProducto: "Mouse",
  precio: 25,
  stock: 50
},
{
  id: 3,
  nombreProducto: "Teclado",
  precio: 45,
  stock: 0
},
{
  id: 4,
  nombreProducto: "Monitor",
  precio: 300,
  stock: 15
},
{
  id: 5,
  nombreProducto: "Auriculares",
  precio: 80,
  stock: 20
}
];
function validarStock(nombreProducto, productos) {
  return new Promise((resolve, reject) => {
    console.log("validando stock...".yellow)
    setTimeout(() => {
      const producto = productos.find(p => p.nombreProducto === nombreProducto);
      if (!producto) {
        reject("Producto no encontrado".red);
      } else {
        console.log(`El producto se encuentra en la lista!`.green)
        resolve(producto);
      }
    }, 3000);
  });
}


function realizarVenta(producto) {
  return new Promise((resolve, reject) => {
    console.log(`Realizando venta...`.yellow)
    setTimeout(() => {
      if (producto.stock <= 0) {
        return reject("Sin stock disponible".red);
      }
      producto.stock -= 1;
      resolve(producto);
    }, 2000);
  });
}


function imprimirEtiqueta(nombreProducto) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Etiqueta generada para: ${nombreProducto}`.yellow);
      resolve("Etiqueta generada correctamente".green);
    }, 4000);
  });
}

function venderProducto(nombreProducto) {

  validarStock(nombreProducto, productos)

    .then((producto) => {
      return realizarVenta(producto)
    })

    .then((productoVendido) => {
      return imprimirEtiqueta(productoVendido.nombreProducto)
    })

    .then((mensaje) => {
      console.log(mensaje)
    })

    .catch((error) => {
      console.log(error)
    })

    .finally(() => {
      console.log("Operación finalizada")
    })
}
// venderProducto("Mouse")
module.exports = {venderProducto}