"use client";
import { Modal, Button } from 'react-bootstrap';

export default function NoticiaModal({ show, handleClose, noticia }: any) {
  const hayDatos = noticia && noticia.titulo;

  return (
    <Modal show={show} onHide={handleClose} centered size="lg">
      <Modal.Header closeButton>
        <Modal.Title>{hayDatos ? "Detalle de la Noticia" : "ERROR"}</Modal.Title>
      </Modal.Header>
      
      <Modal.Body className="p-4">
        {hayDatos ? (
      
          <div className="d-flex gap-4 align-items-start">
            
       
            <img 
              src={noticia.imagen} 
              alt={noticia.titulo}
              style={{ 
                width: '250px',       
                height: '180px',      
                objectFit: 'cover',   
                borderRadius: '8px',  
                flexShrink: 0         
              }} 
            />
            
            
            <div>
              <h4 className="mb-3">{noticia.titulo}</h4>
              <p className="lead" style={{fontSize: '1.1rem'}}>{noticia.texto}</p>
            </div>

          </div>
        ) : (
          
          <div className="text-center">
            <h3 className="text-danger">NADA QUE MOSTRAR</h3>
            <img src="https://http.cat/404" style={{ width: '50%', margin: '20px auto' }} alt="Error 404" />
          </div>
        )}
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
            Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}