import { getDictionary } from '../../lib/get-dictionary';
import PokemonCard from '../components/PokemonCard';
import { notFound } from 'next/navigation'; 
export default async function Page({ params }: { params: { lang: any } }) {

  if (['sp', 'en', 'fr'].indexOf(params.lang) === -1) {
    notFound();
  }

  const dict = await getDictionary(params.lang);
  const randomId = Math.floor(Math.random() * 151) + 1;

  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
  const pokemon = await res.json();

  return (
    <main className="p-8 text-center">
      <h1 className="text-4xl font-bold mb-6">{dict.bienvenida}</h1>
      <div className="flex justify-center">
        <PokemonCard pokemon={pokemon} />
      </div>
    </main>
  );
}