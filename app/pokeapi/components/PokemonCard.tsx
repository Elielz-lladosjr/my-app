'use client';
import { useLanguage } from '../context/LanguageContext';

export default function PokemonCard({ pokemon, onOpenModal }: any) {
  const { t } = useLanguage();

  return (
    <div className="card h-100 text-center shadow-sm border-0" style={{ borderRadius: '15px', overflow: 'hidden' }}>
      <div className="card-body d-flex flex-column align-items-center">
        <img 
            src={pokemon.sprites.front_default} 
            alt={pokemon.name} 
            width={120} height={120}
            className="mb-2"
        />
        
        <h5 className="card-title text-capitalize fw-bold mb-1">{pokemon.name}</h5>
        <span className="badge bg-secondary mb-3">#{pokemon.id}</span>
        
        <button 
            className="btn btn-danger w-100 mt-auto" 
            onClick={() => onOpenModal(pokemon)}
        >
          {t.detail_btn || "Ver Detalle"}
        </button>
      </div>
    </div>
  );
}