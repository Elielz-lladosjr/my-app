"use client";
import { Modal, Button } from 'react-bootstrap';

export default function NoticiaModal({ show, handleClose, noticia }: any) {
  const hayDatos = noticia && noticia.titulo;

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{hayDatos ? noticia.titulo : "ERROR"}</Modal.Title>
      </Modal.Header>
      
      <Modal.Body className="text-center">
        {hayDatos ? (
          <>
            <img src={noticia.imagen} style={{ width: '100%', marginBottom: '15px' }} />
            <p>{noticia.texto}</p>
          </>
        ) : (
          <>
            <h3>NADA QUE MOSTRAR</h3>
            <img src="https://http.cat/404" style={{ width: '100%' }} />
          </>
        )}
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
            Volver a Inicio
        </Button>
      </Modal.Footer>
    </Modal>
  );
}