"use client";
import { useEffect, useState } from "react";

import { useAppSelector } from "@/store";
import { PokemonGrid } from "..";
import { IoHeartOutline } from "react-icons/io5";

export const FavoritesGrid = () => {
  const favorites = useAppSelector((state) =>
    Object.values(state.pokemons.favorites)
  );
  const [pokemons, setPokemons] = useState(favorites);

  if (pokemons.length === 0) {
    return <NoFavorites />;
  }

  return <PokemonGrid pokemons={pokemons} />;
};

export const NoFavorites = () => {
  return (
    <div className="flex flex-col h-[50vh] items-center justify-center">
      <IoHeartOutline size={100} className="text-red-500" />
      <span>No hay favoritos</span>
    </div>
  );
};
