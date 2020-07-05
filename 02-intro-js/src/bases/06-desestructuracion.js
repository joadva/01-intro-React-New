//desestrutucacion

const persona = {
  nombre: "Tony",
  edad: 45,
  clave: "ironman",
};

//const { edad, clave, nombre } = persona;

const userContext = ({ clave, nombre, edad }) => {
  return {
    nombreClave: clave,
    anios: edad,
    latlng: {
      lat: 143.234,
      lng: -123.2342,
    },
  };
};

const {
  nombreClave,
  anios,
  latlng: { lat, lng },
} = userContext(persona);

console.log(nombreClave, anios);
console.log(lat, lng);

let laatitud = lat;
let longitud = lng;
console.log(laatitud, longitud);
