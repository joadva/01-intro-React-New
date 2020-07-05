const activo = true;
/* 
let mensaje = "";

if (activo) {
  mensaje = " Activo";
} else {
  mensaje = "Inactivo";
}

const mesaje = activo ? "Activo" : "Inactivo";

const mesaje = activo ? "Activo" : null; */

const mensaje = !activo && "Activo";

console.log(mensaje);
