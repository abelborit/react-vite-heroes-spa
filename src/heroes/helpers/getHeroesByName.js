import { heroes } from "../data/heroes";

export const getHeroesByName = (name = "") => {
  name = name.toLowerCase().trim();

  /* quiere decir que la persona no escribió nada */
  if (name.length === 0) return [];

  /* si es que la persona escribió algo entonces filtrará al arreglo de heroes y tomará el "superhero" pasándolo a minúsculas y verá si incluye el name que se le está pasando, si eso ocurren entonces retornará el o los elementos */
  return heroes.filter((hero) => hero.superhero.toLowerCase().includes(name));
};
