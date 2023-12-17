import { MiddlewareAPI } from "@reduxjs/toolkit";
import { RootState } from "./../index";

export const localstorageMiddleware = (state: MiddlewareAPI) => {
  return (next: any) => (action: any) => {
    if (action.type === "pokemons/toggleFavorite") {
      const { pokemons } = state.getState() as RootState;
      localStorage.setItem("favorite-pokemons", JSON.stringify(pokemons));
    }

    next(action);
  };
};
