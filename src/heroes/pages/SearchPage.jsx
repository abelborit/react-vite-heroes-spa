import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";

import { useForm } from "../../hooks/useForm";
import { HeroCard } from "../components";
import { getHeroesByName } from "../helpers";

export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  // console.log(location);

  // const query = queryString.parse(location.search);
  // console.log({ query });
  const { q = "" } = queryString.parse(location.search);
  const getHero = getHeroesByName(q);

  const { searchText, formState, onInputChange, onResetForm } = useForm({
    searchText: q,
  });

  const onSearchSubmit = (e) => {
    e.preventDefault();
    // if (searchText.trim().length < 1) return;

    // console.log(formState);
    // console.log(searchText);

    /* se desestructura desde el formState o simplemente se puede mostrar el formState*/
    // console.log({ searchText });

    navigate(`?q=${searchText.toLowerCase().trim()}`);
  };

  return (
    <>
      <h1>Search</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />

          <form onSubmit={onSearchSubmit} aria-label="form">
            <input
              type="text"
              name="searchText"
              value={searchText}
              onChange={onInputChange}
              placeholder="Search a Hero"
              className="form-control"
              autoComplete="off"
            />

            <button className="btn btn-outline-primary mt-2">Search</button>
          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />

          {q === "" ? (
            <div className="alert alert-primary animate__animated animate__fadeIn">
              Search a Hero
            </div>
          ) : (
            getHero.length === 0 && (
              <div className="alert alert-danger animate__animated animate__fadeIn">
                No hero with <b>{q}</b>
              </div>
            )
          )}

          {getHero.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </>
  );
};
