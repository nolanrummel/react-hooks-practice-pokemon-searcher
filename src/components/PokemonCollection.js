import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokemon, search}) {
  const filteredPokemon = pokemon.filter((poke) => poke.name.toLowerCase().includes(search.toLowerCase()))

  const renderedPokemon = filteredPokemon.map((singlePokemon) => 
    <PokemonCard
      key={singlePokemon.id}
      name={singlePokemon.name}
      hp={singlePokemon.hp}
      sprites={singlePokemon.sprites}
    />
  )
  return (
    <Card.Group itemsPerRow={6}>
      <h1>Hello From Pokemon Collection</h1>
      {renderedPokemon}
    </Card.Group>
  );
}

export default PokemonCollection;
