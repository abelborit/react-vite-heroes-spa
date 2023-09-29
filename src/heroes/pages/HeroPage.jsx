import React, { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroById } from "../helpers";

export const HeroPage = () => {
  const { heroId } = useParams();
  const navigate = useNavigate();

  /* cuando se tienen funciones que se llaman directamente en la raiz del funtional component, hay que recordar que cada vez que hay un cambio en el state, no necesariamente de este componente ya que puede ser de un componente padre, entonces se re-renderiza este elemento y como este tampoco se está memorizando entonces puede ser que se rendericen de nuevo las funciones dentro, para evitar esto hay que tener consideración de memorizar sus funciones */
  // const getHero = getHeroById(heroId);

  const getHero = useMemo(() => getHeroById(heroId), [heroId]);
  // console.log(getHero);

  const handleNavigateBack = () => {
    navigate(-1);
  };

  if (!getHero) {
    return <Navigate to="/marvel" />;
  }

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img
          src={`/assets/heroes/${heroId}.jpg`}
          alt={getHero.superhero}
          className="img-thumbnail animate__animated animate__fadeInLeft"
        />
      </div>

      <div className="col-8 animate__animated animate__fadeInRight">
        <h3>{getHero.superhero}</h3>

        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Alter ego:</b> {getHero.alter_ego}
          </li>

          <li className="list-group-item">
            <b>Publisher:</b> {getHero.publisher}
          </li>

          <li className="list-group-item">
            <b>First appearance:</b> {getHero.first_appearance}
          </li>
        </ul>

        <h5 className="mt-3">Characters</h5>
        <p>{getHero.characters}</p>

        <button
          className="btn btn-outline-primary"
          onClick={handleNavigateBack}
        >
          Regresar
        </button>
      </div>
    </div>
  );
};
