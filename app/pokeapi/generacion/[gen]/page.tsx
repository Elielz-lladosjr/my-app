'use client';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { useLanguage } from '../../context/LanguageContext';

import PokemonCard from '../../components/PokemonCard';
import PokemonModal from '../../components/PokemonModal';

export default function GeneracionPage() {
  const params = useParams();
  const { t } = useLanguage();


  if (params?.gen === '3') {
    return (
      <div className="container text-center mt-5">
        <h1 className="text-danger fw-bold">404</h1>
        <p>{t?.error || 'Nada que mostrar'}</p>
        <img src="/404.png" alt="404" width={300} />
      </div>
    );
  }

  const [pokemons, setPokemons] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    let min = 387, max = 493; // generación 4

    const ids = Array.from({ length: 10 }, () =>
      Math.floor(Math.random() * (max - min + 1)) + min
    );

    Promise.all(
      ids.map(id =>
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(r => r.json())
      )
    ).then(data => {
      setPokemons(data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="container">
      <h2 className="text-center mb-4">
        {t?.generation} {params.gen}
      </h2>

      {loading && <p className="text-center">{t?.loading}</p>}

      <div className="row">
        {pokemons.map((p, i) => (
          <div key={i} className="col-md-3">
            <PokemonCard
              pokemon={p}
              onOpenModal={(pk: any) => {
                setSelected(pk);
                setShow(true);
              }}
            />
          </div>
        ))}
      </div>

      <PokemonModal show={show} handleClose={() => setShow(false)} pokemon={selected} />
    </div>
  );
}
