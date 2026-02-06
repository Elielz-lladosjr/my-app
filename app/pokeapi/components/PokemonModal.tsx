"use client";

import { Modal, Button, ProgressBar } from "react-bootstrap";
import { useLanguage } from "../context/LanguageContext";
import { useEffect, useState } from "react";

export default function PokemonModal({ show, handleClose, pokemon }: any) {
  const { t } = useLanguage();
  const [current, setCurrent] = useState<any>(pokemon);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    setCurrent(pokemon);
  }, [pokemon]);

  if (!current) return null;

  const id = current.id;

  const fetchPokemon = async (newId: number) => {
    if (newId < 1 || newId > 1000) return;

    setLoading(true);
    try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${newId}`);
      if (!res.ok) return;
      const data = await res.json();
      setCurrent(data);
    } finally {
      setLoading(false);
    }
  };

  const getStat = (name: string) =>
    current.stats.find((s: any) => s.stat.name === name)?.base_stat || 0;

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton className="bg-danger text-white">
        <Modal.Title className="text-capitalize fw-bold">
          {current.name} <small>#{id}</small>
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>

        <div className="mb-3">
          <small>ID Pokémon ({id} / 1000)</small>
          <ProgressBar now={id} max={1000} />
        </div>

        <div className="text-center mb-4">
          <img
            src={
              current.sprites.other["official-artwork"].front_default ||
              current.sprites.front_default
            }
            alt={current.name}
            width={180}
          />
        </div>

        <div>
          <p><strong>{t?.height || "Altura"}:</strong> {current.height / 10} m</p>
          <p><strong>{t?.weight || "Peso"}:</strong> {current.weight / 10} kg</p>

          <hr />
          <strong>{t?.stats || "Estadísticas"}</strong>

          <div className="mb-2">
            {t?.hp || "HP"}
            <ProgressBar now={getStat("hp")} max={150} />
          </div>
          <div className="mb-2">
            {t?.attack || "Ataque"}
            <ProgressBar now={getStat("attack")} max={150} />
          </div>
          <div className="mb-2">
            {t?.defense || "Defensa"}
            <ProgressBar now={getStat("defense")} max={150} />
          </div>
        </div>
      </Modal.Body>

      <Modal.Footer className="d-flex justify-content-between">
        <Button
          variant="outline-primary"
          disabled={id === 1 || loading}
          onClick={() => fetchPokemon(id - 1)}
        >
          {t?.prev || "Anterior"}
        </Button>

        <Button variant="secondary" onClick={handleClose}>
          {t?.close_btn || "Cerrar"}
        </Button>

        <Button
          variant="outline-primary"
          disabled={id === 1000 || loading}
          onClick={() => fetchPokemon(id + 1)}
        >
          {t?.next || "Siguiente"}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
