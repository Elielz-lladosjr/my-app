import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import { LanguageProvider } from './context/LanguageContext';
import Header from './components/Header';
import Footer from './components/Footer';

export const metadata = { title: 'Pokedex Examen' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <LanguageProvider>
          <Header />
           <div className="text-center py-3 bg-light border-bottom">
            <img src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" height={60} alt="logo"/>
          </div>
          <main className="container py-4">
            {children}
          </main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}