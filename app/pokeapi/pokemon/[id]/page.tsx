"use client";
import { useEffect, useState } from "react";

export default function PokemonDetail({ params }: { params: { id: string } }) {
  const [pokemon, setPokemon] = useState<any>(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`)
      .then(r => r.json())
      .then(setPokemon);
  }, [params.id]);

  if (!pokemon) return <p>Cargando...</p>;

  return (
    <div className="card p-3">
      <h3>{pokemon.name}</h3>
      <p>Ataque: {pokemon.stats[1].base_stat}</p>
      <p>Defensa: {pokemon.stats[2].base_stat}</p>
      <p>Vida: {pokemon.stats[0].base_stat}</p>
    </div>
  );
}
