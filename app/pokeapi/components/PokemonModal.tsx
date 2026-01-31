'use client';
import { Modal, Button, ProgressBar } from 'react-bootstrap';
import { useLanguage } from '../context/LanguageContext';

export default function PokemonModal({ show, handleClose, pokemon }: any) {
  const { t } = useLanguage();

  if (!pokemon) return null;

  const getStat = (name: string) => {
    const s = pokemon.stats.find((item: any) => item.stat.name === name);
    return s ? s.base_stat : 0;
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton className="bg-danger text-white">
        <Modal.Title className="text-capitalize fw-bold">
          {pokemon.name} <small>#{pokemon.id}</small>
        </Modal.Title>
      </Modal.Header>
      
      <Modal.Body>
        <div className="text-center mb-4">
          <img 
            src={pokemon.sprites.other['official-artwork'].front_default || pokemon.sprites.front_default} 
            alt={pokemon.name} 
            width={180}
          />
        </div>

        <div className="px-3">
            <div className="d-flex justify-content-between mb-2">
                <strong>{t.height || "Altura"}:</strong> <span>{pokemon.height / 10} m</span>
            </div>
            <div className="d-flex justify-content-between mb-3">
                <strong>{t.weight || "Peso"}:</strong> <span>{pokemon.weight / 10} kg</span>
            </div>
            
            <hr />
            
            <h5 className="mb-3 fw-bold">{t.stats || "Estadísticas"}</h5>

            <div className="mb-2">
                <div className="d-flex justify-content-between small">
                    <span>{t.hp || "Vida (HP)"}</span>
                    <span className="fw-bold">{getStat('hp')}</span>
                </div>
                <ProgressBar variant="success" now={getStat('hp')} max={150} />
            </div>

            <div className="mb-2">
                <div className="d-flex justify-content-between small">
                    <span>{t.attack || "Ataque"}</span>
                    <span className="fw-bold">{getStat('attack')}</span>
                </div>
                <ProgressBar variant="danger" now={getStat('attack')} max={150} />
            </div>

            <div className="mb-2">
                <div className="d-flex justify-content-between small">
                    <span>{t.defense || "Defensa"}</span>
                    <span className="fw-bold">{getStat('defense')}</span>
                </div>
                <ProgressBar variant="info" now={getStat('defense')} max={150} />
            </div>
        </div>
      </Modal.Body>
      
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}