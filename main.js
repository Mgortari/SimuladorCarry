// se crean las variables con los diferentes estilos de productos 

const productos = [
    {
        id: 1,
        nombre: 'natural',
        precio: 1200
    },
    {
        id: 2,
        nombre: 'descafeinado',
        precio: 1750
    },
    {
        id: 3,
        nombre: 'intenso',
        precio: 1560
    },
    {
        id: 4,
        nombre: 'arabica',
        precio: 2100
    },
    {
        id: 5,
        nombre: 'moka',
        precio: 2500
    },
]

// se crea variables para agregar datos desde menu 

let carrito = []
let select = prompt(`Ingrese Si para continuar con su compra`)

// se crea un bucle para poder avanzar en el menu 

while (select != "si" && select != "no") {
    alert("Ingresar si o no")
    select = prompt("Desea comprar algo si o no")
}

// se genera una condicion para que nos liste los productos y precios que contiene el menu

if (select == "si") {
    alert("A continuacion nuestra lista de productos")
    let allProductos = productos.map((producto) => producto.nombre + " " + producto.precio + "$");
    alert(allProductos.join(" \n "))
} else if (select == "no") {
    alert("Gracias por su visita")
}

//  se genera un bucle para que podamos elegir varios productos, y pueda sumar las cantidades y los precios
while (select != "no") {
    let producto = prompt("Agregar un producto a tu carrito")
    let precio = 0

    if (producto == "natural" || producto == "descafeinado" || producto == "intenso" || producto == "arabica" || producto == "moka") {
        switch (producto) {
            case "natural":
                precio = 1200;
                break;
            case "descafeinado":
                precio = 1750;
                break;
            case "intenso":
                precio = 1560;
                break;
            case "arabica":
                precio = 2100;
                break;
            case "moka":
                precio = 2500;
                break;
            default:
                break;
        }
        let unidades = parseInt(prompt("Cuantas unidades quiere llevar?"))

    // llamo a la variable carrito para utilizar (PUSH) para agregar productos y sumarlos

        carrito.push({ producto, unidades, precio })
        console.log(carrito)
    } else {
        alert("No tenemos ese producto");
    }
    select = prompt("Desea seguir comprando??")

    // finalizamos con un bucle para mostrar la cantidad final de los productos selecionados.
    while(select === "no") {
        alert("Gracias por su compra!")
        carrito.forEach((carritoFinal) => {
            alert(`Producto: ${carritoFinal.producto} \n Unidades: ${carritoFinal.unidades} \n Total a pagar por producto ${carritoFinal.unidades * carritoFinal.precio}`)
        })
        break;
    }

}

const total = carrito.reduce((acc, el) => + el.precio * el.unidades, 0)

alert(`El total a pagar por su compra es: ${total}`)
console.log(`El total a pagar por su compra es: ${total}`)

