import { PokemonCard } from "..";
import { SimplePokemon } from "../interfaces/simple-pokemon";

interface PokemonGrid {
  pokemons: SimplePokemon[];
}

export const PokemonGrid = ({ pokemons }: PokemonGrid) => {
  return (
    <div className="flex flex-wrap gap-10 items-center justify-center">
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
};
