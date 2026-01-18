import s from './instituto.module.css';


export default function Page() {
  return (
    <main className={s.grid}>
      
      {/* IZQUIERDA: NOTICIAS */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
          gap: '20px'
        }}
      >
        <div className={s.card}>
          <small>IES CURA VALERA</small>
          <h3>Nueva aula ATECA</h3>
          <p>El centro incorpora un nuevo espacio de innovación tecnológica.</p>
          <img src="/card1.jpg" className={s.cardImg} />
        </div>

        <div className={s.card}>
          <small>IES CURA VALERA</small>
          <h3>Taller contra el acoso</h3>
          <p>Actividad de prevención sobre bullying y ciberacoso.</p>
          <img src="/card2.png" className={s.cardImg} />
        </div>

        <div className={s.card}>
          <small>IES CURA VALERA</small>
          <h3>Feliz Navidad</h3>
          <p>Felicitación navideña de la comunidad educativa.</p>
          <img src="/card3.webp" className={s.cardImg} />
        </div>

        <div className={s.card}>
          <small>IES CURA VALERA</small>
          <h3>Charlas educativas</h3>
          <p>Jornadas formativas para el alumnado del centro.</p>
          <img src="/card4.webp" className={s.cardImg} />
        </div>
      </div>

      <aside>
        <h3 style={{ borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
          BIBLIOTECA WEB
        </h3>

        <img src="/biblioweb.png" alt="Biblioweb" className={s.sidebarImg} />

        <div style={{ marginTop: '20px' }}>
          <iframe
            width="100%"
            height="200"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            style={{ border: 0, borderRadius: '4px' }}
          />
        </div>
      </aside>

    </main>
  );
}
