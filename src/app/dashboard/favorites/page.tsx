import { FavoritesGrid } from "@/pokemons";

export const metadata = {
  title: "Favoritos",
  description:
    "Occaecat est consectetur est reprehenderit sunt ullamco culpa aliqua exercitation eu tempor velit ullamco.",
};

export default async function PokemonsPage() {
  return (
    <div className="flex flex-col">
      <span className="text-3xl my-2">
        Pokemons Favoritos <small className="text-blue-500">Global State</small>
      </span>
      <FavoritesGrid />
    </div>
  );
}
