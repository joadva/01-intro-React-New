// funciones en Js

//const saludar = function (nombre) {
//return `Hola , ${nombre}`;
//};

//funcion de flecha

const saludar2 = (nombre) => {
  return `Hola , ${nombre}`;
};

const saludar3 = (nombre) => `Hola , ${nombre}`;

//console.log(saludar("Goku"));

console.log(saludar2("Vegueta"));
console.log(saludar3("GOGU"));

/* const getUsare = () => ({
  uid: "sdaad",
  username: "ERerqer",
});
 */
const getUsuarioActivo = (nombre) => ({
  uid: "ABC32432",
  username: nombre,
});

const usuarioActivo = getUsuarioActivo("Fernando");
console.log(usuarioActivo);
