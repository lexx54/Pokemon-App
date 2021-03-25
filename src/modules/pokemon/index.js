import React, {useState} from "react";
import Stats from "./stats";
import Info from "./info";
import Button from "./buttons"
import "./pokemon.css";

const Pokemon = ({ pokemonData ,action}) => {
  (
  <section className="pokemon">
    <h2>{pokemonData.name.toUpperCase()}</h2>
    <Info sprites={pokemonData.sprites} id={pokemonData.id} experience={pokemonData.base_experience}/>
    <Stats stats={pokemonData.stats} />
    <Button type="" text="Generate" action={action}/>
  </section>
  )
}

export default Pokemon;