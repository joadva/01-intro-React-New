const persona = {
  nombre: "Toy",
  apellido: "stark",
  edad: 45,
  direccion: {
    ciudad: "New York",
    zip: 3434,
    lat: 14.2323,
    lng: 34.9233,
  },
};
console.log(persona);
console.table(persona);

const persona2 = persona;

console.log(persona2);
