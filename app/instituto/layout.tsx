"use client";
import Link from 'next/link';
import { useState } from 'react';
import s from './instituto.module.css';
import NoticiaModal from './components/NoticiaModal';
import Logo from './components/Logo';

export default function InstitutoLayout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={s.container}>
      <div className={s.hero}>
        <div className={s.overlay}></div>
        <div className={s.topContent}>
          <header className={s.header}>
            <div className={s.logoGroup}>
              <img src="/logo.png" alt="Logo" className={s.logo} />
              <div>
                <h1 className={s.title}>IES CURA VALERA</h1>
                <p style={{margin:0, color:'#008eb6'}}>Junta de Andalucía</p>
              </div>
            </div>
          </header>

          <nav className={s.navBox}>
            <ul className={s.ul}>
              <li><Link href="/instituto" className={s.link}>⊕ Inicio</Link></li>
              <li onMouseEnter={()=>setOpen(true)} onMouseLeave={()=>setOpen(false)} style={{position:'relative'}}>
                <div className={s.link}>⊕ Noticias</div>
                {open && (
                  <div style={{position:'absolute', top:'100%', left:0, background:'#333', padding:'10px', width:'200px', zIndex:100}}>
                    <Link href="/instituto/noticias" style={{color:'white', display:'block'}}>Ver Todo</Link>
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
      
      <footer style={{textAlign:'center', padding:'40px', borderTop:'1px solid #ddd'}}>
        <p>IES Cura Valera</p>
        <div>
            <Logo link="https://google.com" imagen="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" />
            <Logo link="https://twitter.com" imagen="https://upload.wikimedia.org/wikipedia/commons/6/6f/Logo_of_Twitter.svg" alt="Twitter" />
            <Logo link="https://youtube.com" imagen="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg" alt="Youtube" />
        </div>
      </footer>
    </div>
  );
} 