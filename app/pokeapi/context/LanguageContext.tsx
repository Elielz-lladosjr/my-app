'use client';
import { createContext, useContext, useState, ReactNode } from 'react';

const dictionary = {
  sp: {
    home: 'Inicio',
    contact: 'Contacto',
    welcome: 'Bienvenido a la Pokédex',
    generation: 'Generación',
    select_lang: 'Idioma',
    loading: 'Cargando...',
    error: 'Error al cargar',
    detail_btn: 'Ver detalle',
    height: 'Altura',
    weight: 'Peso',
    stats: 'Estadísticas',
    hp: 'Vida (HP)',
    attack: 'Ataque',
    defense: 'Defensa',
    contact_text: 'Esta web está generada en NEXT por el alumno [TU NOMBRE] del IES Cura Valera.',
    gen_drop: 'Generaciones'
  },
  en: {
    home: 'Home',
    contact: 'Contact',
    welcome: 'Welcome to the Pokédex',
    generation: 'Generation',
    select_lang: 'Language',
    loading: 'Loading...',
    error: 'Error loading',
    detail_btn: 'View Details',
    height: 'Height',
    weight: 'Weight',
    stats: 'Stats',
    hp: 'Health (HP)',
    attack: 'Attack',
    defense: 'Defense',
    contact_text: 'This web is generated in NEXT by student [YOUR NAME] from IES Cura Valera.',
    gen_drop: 'Generations'
  },
  fr: {
    home: 'Accueil',
    contact: 'Contact',
    welcome: 'Bienvenue sur le Pokédex',
    generation: 'Génération',
    select_lang: 'Langue',
    loading: 'Chargement...',
    error: 'Erreur de chargement',
    detail_btn: 'Voir détails',
    height: 'Taille',
    weight: 'Poids',
    stats: 'Statistiques',
    hp: 'Vie (PV)',
    attack: 'Attaque',
    defense: 'Défense',
    contact_text: 'Ce site est généré en NEXT par l\'étudiant [VOTRE NOM] de l\'IES Cura Valera.',
    gen_drop: 'Générations'
  }
};

const LanguageContext = createContext<any>(null);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState('sp');
  const t = dictionary[lang as keyof typeof dictionary];

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);