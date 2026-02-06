"use client";
import { useState } from 'react';
import s from './instituto.module.css';
import NoticiaModal from './components/NoticiaModal';

export default function Page() {
  const [show, setShow] = useState(false);
  const [seleccionada, setSeleccionada] = useState<any>(null);

  const noticias = [
    { id: 1, titulo: "Nueva aula ATECA", texto: "Nuevo espacio de innovación.", imagen: "/card1.jpg" },
    { id: 2, titulo: "Taller contra el acoso", texto: "Charla para la ESO.", imagen: "/card2.png" },
    { id: 3, titulo: "Feliz Navidad", texto: "Felicitación del centro.", imagen: "/card3.webp" },
    { id: 4, titulo: "Charlas educativas", texto: "Expertos en ciberseguridad.", imagen: "/card4.webp" },
  ];

  const abrirModal = (noticia: any) => {
    setSeleccionada(noticia);
    setShow(true);
  };

  return (
    <main className={s.grid}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px' }}>
        
        {noticias.map((n) => (
          <div key={n.id} className={s.card}>
            <small>IES CURA VALERA</small>
            <h3>{n.titulo}</h3>
            <p>{n.texto}</p>
            <img src={n.imagen} className={s.cardImg} />
            <button onClick={() => abrirModal(n)} className="btn btn-link" style={{padding:0}}>
                Ver detalle
            </button>
          </div>
        ))}

        <div className={s.card} style={{border:'2px dashed red'}}>
            <h3>Prueba Error</h3>
            <button onClick={() => abrirModal(null)} className="btn btn-danger">Simular 404</button>
        </div>
      </div>

      <aside>
        <h3>BIBLIOTECA WEB</h3>
        <iframe width="100%" height="200" src="https://www.youtube.com/embed/dQw4w9WgXcQ" style={{ border: 0 }} />
      </aside>

      <NoticiaModal show={show} handleClose={() => setShow(false)} noticia={seleccionada} />
    </main>
  );
}