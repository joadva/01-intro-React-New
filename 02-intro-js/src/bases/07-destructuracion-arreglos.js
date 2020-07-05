// destructuracion arreglos

const personajes = ["Goku", "Vegueta", "Trunks"];
// las comillas hacen pasar el valor en el arreglo :B csolo comillas sin espacios
const [, p2] = personajes;
console.log(p2);

const regresaArreglo = () => {
  return ["ABC", 123];
};

const [letras, numeros] = regresaArreglo();
console.log(letras, numeros);

//tarea
//1 el primer valor de arr se llamara nombre
//2 , se llamra set Nombre
const useState = (valor) => {
  return [
    valor,
    () => {
      console.log("Hola Mundo");
    },
  ];
};

//resultado
const [nombre, setNombre] = useState("Goku");
//console.log(arr);

console.log(nombre);
setNombre();
