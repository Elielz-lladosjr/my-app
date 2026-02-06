import { getDictionary } from '../../../lib/get-dictionary';
import PokemonCard from '../../components/PokemonCard';
import Link from 'next/link';

const LANG = 'sp';

export default async function PokemonDetailPage({ params }: { params: { id: string } }) {
  const dict = await getDictionary(LANG);
  const pokeId = Number(params.id);

  if (isNaN(pokeId) || pokeId < 1 || pokeId > 1000) {
    return (
      <div className="container text-center mt-5">
        <h1 className="text-danger fw-bold">{dict.error_title}</h1>
        <p>ID inválido</p>
        <Link href="/pokeapi" className="btn btn-primary mt-3">
          {dict.error_btn}
        </Link>
      </div>
    );
  }

  let pokemon = null;

  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeId}`, {
      cache: 'no-store',
    });
    if (!res.ok) throw new Error();
    pokemon = await res.json();
  } catch {
    return (
      <div className="container text-center mt-5">
        <h1 className="text-danger fw-bold">{dict.error_title}</h1>
        <Link href="/pokeapi" className="btn btn-primary mt-3">
          {dict.error_btn}
        </Link>
      </div>
    );
  }


  const prevId = pokeId === 1 ? 1 : pokeId - 1;
  const nextId = pokeId === 1000 ? 1000 : pokeId + 1;

  return (
    <div className="container mt-5 pb-5 text-center">
      <PokemonCard pokemon={pokemon} onOpenModal={() => {}} />

      <div className="d-flex justify-content-between mt-4">
        <Link
          href={`/pokemon/${prevId}`}
          className={`btn btn-outline-primary ${pokeId === 1 ? 'disabled' : ''}`}
        >
          ← {dict.prev}
        </Link>

        <Link
          href={`/pokemon/${nextId}`}
          className={`btn btn-outline-primary ${pokeId === 1000 ? 'disabled' : ''}`}
        >
          {dict.next} →
        </Link>
      </div>
    </div>
  );
}
