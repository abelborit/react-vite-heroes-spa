import React, { useMemo } from "react";
import { getHeroesByPublisher } from "../helpers";
import { HeroCard } from "./HeroCard";

export const HeroList = ({ publisher }) => {
  /* cuando se tienen funciones que se llaman directamente en la raiz del funtional component, hay que recordar que cada vez que hay un cambio en el state, no necesariamente de este componente ya que puede ser de un componente padre, entonces se re-renderiza este elemento y como este tampoco se está memorizando entonces puede ser que se rendericen de nuevo las funciones dentro, para evitar esto hay que tener consideración de memorizar sus funciones */
  // const getHeroes = getHeroesByPublisher(publisher);

  const getHeroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);
  // console.log(getHeroes);

  return (
    <div className="row rows-cols-1 row-cols-md-3 g-3">
      {getHeroes.map((hero) => (
        <HeroCard key={hero.id} {...hero} />
      ))}
    </div>
  );
};
