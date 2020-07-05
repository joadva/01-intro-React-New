import heroes from "./data/heroes";

console.log(heroes);

//forma mala
/* const getHeroeById = (id) => {
  return heroes.find((heroe) => {
    if (heroe.id === id) {
      return true;
    } else {
      return false;
    }
  });e
};

console.log(getHeroeById(2));
 */

export const getHeroeById = (id) => {
  return heroes.find((heroe) => heroe.id === id);
};
//console.log(getHeroeById(2));

//find? filter
export const getHeroesByOwnner = (owner) =>
  heroes.filter((heroe) => heroe.owner === owner);

//console.log(getHeroesByOwnner("Marvel"));
