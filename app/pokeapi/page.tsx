'use client';
import { useEffect, useState } from 'react';
import { useLanguage } from './context/LanguageContext';
import PokemonCard from './components/PokemonCard';
import PokemonModal from './components/PokemonModal';

export default function Home() {
  const { t } = useLanguage();
  const [pokemon, setPokemon] = useState<any>(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const randomId = Math.floor(Math.random() * 150) + 1;
    fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`)
      .then(res => res.json())
      .then(data => setPokemon(data));
  }, []);

  return (
    <div className="text-center mt-5">
      <h1>{t.welcome}</h1>
      {pokemon && (
        <div className="d-flex justify-content-center mt-4">
          <div style={{ width: '300px' }}>
            <PokemonCard pokemon={pokemon} onOpenModal={() => setShowModal(true)} />
          </div>
        </div>
      )}
      <PokemonModal show={showModal} handleClose={() => setShowModal(false)} pokemon={pokemon} />
    </div>
  );
}