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
}

/*let aciertoUser = false;
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
