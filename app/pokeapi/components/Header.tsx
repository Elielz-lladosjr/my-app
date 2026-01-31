'use client';

import Link from 'next/link';
import { Nav, Navbar, Container, NavDropdown, Button } from 'react-bootstrap';

import { useLanguage } from '../context/LanguageContext'; 
export default function Header() {
  const { setLang, t } = useLanguage();

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="py-4 fs-5 shadow-lg">
      <Container>
        <Navbar.Brand href="/pokeapi" className="fw-bold text-warning fs-3">Pokédex</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ms-3">
            <Link href="/pokeapi" passHref legacyBehavior><Nav.Link>{t?.home || "Inicio"}</Nav.Link></Link>
            
            <NavDropdown title={t?.gen_drop || "Generaciones"} id="basic-nav-dropdown">
              <Link href="/pokeapi/generacion/1" passHref legacyBehavior><NavDropdown.Item>Gen 1</NavDropdown.Item></Link>
              <Link href="/pokeapi/generacion/2" passHref legacyBehavior><NavDropdown.Item>Gen 2</NavDropdown.Item></Link>
              <Link href="/pokeapi/generacion/3" passHref legacyBehavior><NavDropdown.Item>Gen 3</NavDropdown.Item></Link>
            </NavDropdown>

            <Link href="/pokeapi/contacto" passHref legacyBehavior><Nav.Link>{t?.contact || "Contacto"}</Nav.Link></Link>
          </Nav>
          <div className="d-flex gap-2">
            <Button variant="outline-light" onClick={() => setLang('sp')}>SP</Button>
            <Button variant="outline-light" onClick={() => setLang('en')}>EN</Button>
            <Button variant="outline-light" onClick={() => setLang('fr')}>FR</Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}