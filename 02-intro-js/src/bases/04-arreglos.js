//Arreglos

//solo par aponer un tamaño
//const arreglo = new Array(100);

const arreglo = [1, 2, 3, 4];

//insertar algo a un arreglo no ocupar push
//arreglo.push(1);

let arreglo2 = [...arreglo, 5];

const arreglo3 = arreglo2.map(function (numero) {
  return numero * 2;
});
console.log(arreglo2);
console.log(arreglo3);
