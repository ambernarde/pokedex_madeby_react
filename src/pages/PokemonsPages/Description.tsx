import React from "react";
import PokemonContainer from "../../components/PokemonContainer";
import { useAppSelector } from "../../app/hooks";
import Info from "../../components/info";

function Description() {
  const pokemonData = useAppSelector(
    ({ pokemon: { currentPokemon } }) => currentPokemon
  );
  return (
    <>
      { <Info data={pokemonData} /> }
      {pokemonData && <PokemonContainer image={pokemonData.image} />}
    </>
  );
}

export default Description;
