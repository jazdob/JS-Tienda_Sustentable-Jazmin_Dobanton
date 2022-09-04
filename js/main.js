/* OK ENTREGADO Y APROBADO "Desafío: Crear un algoritmo utilizando un ciclo"
let aciertoUser = false;
let contadorUser = 0;
let user = "jonathan";

while (contadorUser < 3 && aciertoUser === false) {
    let ingresoUser = prompt("Ingrese su usuario");
    if (ingresoUser === user) {
        aciertoUser = true;
        alert("Bienvenido " + user + " :)");
        console.log("Ingreso " + user);
    }
contadorUser++;
}

if(!aciertoUser) {
    alert("Usuario incorrecto :(")
}*/

/* DOS VALIDACIONES - CON ERROR
Cuando se cumplen ambos aciertos cierra OK, pero cuando el pass es incorrecto no cierra bien.
Modificar el algoritmo para que cierre OK en el caso de que el user sea correcto pero el pass incorrecto?

let aciertoUser = false;
let aciertoPass = false;
let contadorUser = 0;
let contadorPass = 0;
let user = "jonathan";
let pass = "romero";

while (contadorUser < 3 && aciertoUser === false) {
    let ingresoUser = prompt("Ingrese su usuario");
    if (ingresoUser === user) {
        while (contadorPass < 3 && aciertoPass === false) {
            let ingresoPass = prompt("Ingrese su contraseña");
            if (ingresoPass === pass) {
            aciertoUser = true;
            aciertoPass = true;
            alert("Bienvenido " + user + " :)");
            console.log("Ingreso " + user);
            }
            contadorPass++;
        }
    }
contadorUser++;
}

if(!aciertoUser) {
    alert("Usuario incorrecto :(")
}

if(!aciertoPass) {
    alert("Contraseña incorrecta :(")
}*/

/* OPCIÓN 1: queda en bucle infinito al colocar el pass incorrecto

let aciertoUser = false;
let aciertoPass = false;
let contadorUser = 0;
let contadorPass = 0;
let user = "jonathan";
let pass = "romero";

while (contadorUser < 3 && aciertoUser === false) {
    let ingresoUser = prompt("Ingrese su usuario");
    if (ingresoUser === user) {
        while (aciertoPass === false) {
            let ingresoPass = prompt("Ingrese su contraseña");
            if (ingresoPass === pass) {
                aciertoUser = true;
                aciertoPass = true;
                alert("Bienvenido " + user + " :)");
                console.log("Ingreso " + user);
            }
        }
    }
    contadorUser++;
}
if(!aciertoUser) {
    alert("Usuario incorrecto :(")
} else if(!aciertoPass) {
    alert("Contraseña incorrecta :(")
}*/

/* OPCIÓN 2:

let intentos = 0;
let user = "jonathan";
let pass = "romero";

while (intentos < 3) {
    let ingresoUser = prompt("Ingrese su usuario");
    let ingresoPass = prompt("Ingrese su contraseña");
    if (ingresoUser === user && ingresoPass === pass) {
        alert("Bienvenido " + user + " :)");
        break;
    } else {
        alert("Contraseña incorrecta :(")
    }
    intentos++;
}*/

/* OPCIÓN 3:

let intentos = 0;
let user = "jonathan";
let pass = "romero";

while (intentos <3) {
    let ingresoUser = prompt("Ingrese su usuario");
    let ingresoPass = prompt("Ingrese su contraseña");
    if (intentos == 1) {
        alert("Este es tu último intento");
    }
    if (ingresoUser === user && ingresoPass === pass) {
        alert("Bienvenido " + user + " :)");
        break;
    } else { 
        alert("Vuelve a intentarlo");
    }
    intentos++;
}*/



/* OK ENTREGADO Y APROBADO "Desafío: Simulador interactivo" 


function solicitarNombre() {
    let nombre = prompt("Bienvenido a Tienda Sustentable :) \nPor favor ingresá tu nombre:");
    while(nombre === ""){
    nombre = prompt("Ingresa tu nombre para entrar a la tienda:");
    return nombre;
    }
}


function selectProducto() {
   let producto;
   do{
        producto = parseInt(prompt("¿Qué estás buscando?  :  \n1) Cepillo de bambú: $100 \n2) Shampoo sólido: $200 \n3) Acondicionador sólido: $300"))}
    while(producto!= 1 && producto!=2 && producto!=3)
    switch(producto){
        case 1:
            return "Cepillo de bambú";
        case 2:
            return "Shampoo sólido";
        case 3:
            return "Acondicionador sólido";
    }
    
}

function calcularPrecio(producto){
    if(producto==="Cepillo de bambú"){
        return 100;
    }
    else if(producto==="Shampoo sólido"){
        return 200;
    }
    else if(producto==="Acondicionador sólido"){
        return 300;
    }
}


function medioDePago() {
    let pago;
    do{
        pago =parseInt(prompt("¿Cómo desea abonar? : \n1)Efectivo \n2)Mercado Pago \n3)Tarjeta de crédito"))}
    while(pago!= 1 && pago!=2 && pago!=3 )
    switch(pago){
        case 1:
            return "Efectivo";
        case 2:
            return "Mercado Pago";
        case 3:
            return "Tarjeta de crédito";
    }
}


function resumen(producto,precio,pago){
    alert("Resumen de compra: "+producto+"\nPrecio: $"+precio+"\nMedio de pago: "+pago+"\nGracias por tu compra!!!💚");
}


solicitarNombre();

let nombreProducto = selectProducto();
console.log(nombreProducto);

let aPagar = calcularPrecio(nombreProducto);
console.log(aPagar);

let formaDePago = medioDePago();
console.log(formaDePago);

resumen(nombreProducto,aPagar,formaDePago) */



/* ENTREGA: "Desafío complementario: Incorporar Arrays"
+ "Primera entrega del Proyecto Final"*/

const productos = [
    { cod: 1, nombre: "cepillo", precio: 100, img: "cepillo.jpg" },
    { cod: 2, nombre: "shampoo", precio: 200, img: "shampoo.jpg" },
    { cod: 3, nombre: "acondicionador", precio: 300, img: "acondicionador.jpg" },
    { cod: 4, nombre: "esponja", precio: 400, img: "esponja.jpg" },
    { cod: 5, nombre: "jabon", precio: 500, img: "jabon.jpg" },
    { cod: 6, nombre: "jabonera", precio: 600, img: "jabonera.jpg" },
  ];
  console.log(productos);
  
  function Producto(cod, nombre, precio, img) {
    this.cod = cod;
    this.nombre = nombre;
    this.precio = precio;
    this.img = img;
  }
  
  const nuevoProducto = new Producto(7, "vela", 700, "vela.JPG");
  
  function cargarProducto(arr, valor) {
    arr.push(valor);
  }
  
  cargarProducto(productos, nuevoProducto);
  
  function filtrarProducto(arr, filtro) {
    const filtrado = arr.filter((el) => {
      return el.nombre.includes(filtro) || el.precio < 600;
    });
    return filtrado;
  }
  
  /* let ingreso = prompt("Ingresa un producto a buscar");
  
  const resultado = filtrarProducto(productos, ingreso.toLocaleLowerCase());
  
  const carrito = [];
  cargarProducto(carrito, resultado);
  
  for (const elemento of resultado) {
    carrito.push(elemento);
  } */
  /* 
  console.log(resultado);
  console.log(carrito); */
  
  /* function buscarPorNombre(arr, filtro) {
    const encontrado = arr.find((el) => {
      return el.nombre === filtro;
    });
    return encontrado;
  }
  
  const encontrado = buscarPorNombre(productos, ingreso);
  
  console.log(encontrado); */
  
  let porPrecio = prompt(
    "Selecciona una criterio de ordenamiento \n 1 - Menor precio \n 2 - Mayor precio"
  );
  
  function filtrarPorPrecio(arr, filtro) {
    let valor = prompt("Ingresa el importe");
  
    return arr.filter((el) => {
      switch (filtro) {
        case "1":
          return el.precio < valor;
          break;
        case "2":
          return el.precio > valor;
          break;
      }
    });
  }
  const precio = filtrarPorPrecio(productos, porPrecio);
  console.log(precio);
  