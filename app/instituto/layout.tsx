"use client";
import Link from 'next/link';
import { useState } from 'react';
import s from './instituto.module.css'; // 's' para escribir menos

export default function InstitutoLayout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={s.container}>
      <div className={s.hero}>
        <div className={s.overlay}></div>
        
        <div className={s.topContent}>
          {/* HEADER */}
          <header className={s.header}>
            <div className={s.logoGroup}>
              <img src="/logo.png" alt="Logo" className={s.logo} />
              <div>
                <h1 className={s.title}>IES CURA VALERA</h1>
                <p style={{margin:0, color:'#008eb6', fontFamily:'sans-serif'}}>Junta de Andalucía</p>
              </div>
            </div>
            <div>🔍 SEARCH</div>
          </header>

          {/* BARRA MENU */}
          <nav className={s.navBox}>
            <ul className={s.ul}>
              <li><Link href="/instituto" className={s.link}>⊕ Inicio</Link></li>
              
              {/* DESPLEGABLE SIMPLE */}
              <li onMouseEnter={()=>setOpen(true)} onMouseLeave={()=>setOpen(false)} style={{position:'relative'}}>
                <div className={s.link}>⊕ Noticias</div>
                {open && (
                  <div style={{position:'absolute', top:'100%', left:0, background:'#333', padding:'10px', width:'200px'}}>
                    <Link href="/instituto/noticias" style={{color:'white', display:'block', padding:'5px', textDecoration:'none'}}>Ver Todo</Link>
                  </div>
                )}
              </li>

              <li><Link href="/instituto/oferta-educativa" className={s.link}>⊕ Oferta Educativa</Link></li>
              <li><Link href="/instituto/biblioteca-escolar" className={s.link}>⊕ Biblioteca Escolar</Link></li>
              <li><Link href="/instituto/contacto" className={s.link}>⊕ Contacto</Link></li>
            </ul>
          </nav>
        </div>
      </div>

      {children}
      
      <footer style={{textAlign:'center', padding:'40px', borderTop:'1px solid #ddd'}}>© IES Cura Valera</footer>
    </div>
  );
}