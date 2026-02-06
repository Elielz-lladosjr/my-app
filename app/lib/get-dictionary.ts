import 'server-only';

const dictionaries = {
  sp: () => Promise.resolve({
    bienvenida: "Bienvenido a la Pokedex",
    home: "Inicio",
    others: "Otras",
    contact: "Contacto",
    season3: "Tercera temporada",
    season4: "Cuarta temporada",

    error_title: "Pokémon no encontrado",
    error_btn: "Volver",

    prev: "Anterior",
    next: "Siguiente",
  }),

  en: () => Promise.resolve({
    bienvenida: "Welcome to the Pokedex",
    home: "Home",
    others: "Others",
    contact: "Contact",
    season3: "Third season",
    season4: "Fourth season",

    error_title: "Pokémon not found",
    error_btn: "Go back",

    prev: "Previous",
    next: "Next",
  }),

  fr: () => Promise.resolve({
    bienvenida: "Bienvenue sur le Pokedex",
    home: "Accueil",
    others: "Autres",
    contact: "Contact",
    season3: "Troisième saison",
    season4: "Quatrième saison",

    error_title: "Pokémon non trouvé",
    error_btn: "Retour",

    prev: "Précédent",
    next: "Suivant",
  }),
};

export const getDictionary = async (locale: string) => {
  return dictionaries[locale as keyof typeof dictionaries]?.() || dictionaries.sp();
};
    