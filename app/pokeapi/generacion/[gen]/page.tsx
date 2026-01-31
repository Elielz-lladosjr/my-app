'use client';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
// Estamos en: app > pokeapi > generacion > [gen]
// Queremos ir a: app > pokeapi > context
// ../ salimos de [gen]
// ../../ salimos de generacion y estamos en pokeapi. ¡Ahí vemos context!
import { useLanguage } from '../../context/LanguageContext';
import PokemonCard from '../../components/PokemonCard';
import PokemonModal from '../../components/PokemonModal';

export default function GeneracionPage() {
  const params = useParams();
  const { t } = useLanguage(); 
  
  const [pokemons, setPokemons] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  
  const [selectedPoke, setSelectedPoke] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setLoading(true);
    setPokemons([]);

    if (!params?.gen) return;

    // Convertir gen a string para comparar
    const gen = String(params.gen); 
    let min = 1, max = 151;
    
    if (gen === '2') { min = 152; max = 251; }
    else if (gen === '3') { min = 252; max = 386; }

    const ids = [];
    for(let i=0; i<10; i++) {
        const randomId = Math.floor(Math.random() * (max - min + 1)) + min;
        ids.push(randomId);
    }

    Promise.all(ids.map(id => 
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(res => res.json())
    ))
    .then(results => {
        setPokemons(results);
        setLoading(false);
    })
    .catch(err => {
        console.error(err);
        setLoading(false);
    });

  }, [params.gen]);

  return (
    <div>
      <h2 className="text-center mb-4 fw-bold">
        {t?.generation || "Generación"} {params.gen}
      </h2>

      {loading && (
        <div className="text-center mt-5">
           <div className="spinner-border text-danger"></div>
           <p>Cargando...</p>
        </div>
      )}

      {!loading && (
        <div className="row g-4">
          {pokemons.map((poke, index) => (
            <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3">
               <PokemonCard 
                  pokemon={poke} 
                  onOpenModal={(p: any) => { setSelectedPoke(p); setShowModal(true); }} 
               />
            </div>
          ))}
        </div>
      )}

      <PokemonModal 
        show={showModal} 
        handleClose={() => setShowModal(false)} 
        pokemon={selectedPoke} 
      />
    </div>
  );
}