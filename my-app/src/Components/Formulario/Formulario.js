import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Formulario() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" placeholder="Nombre de la tarea" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formDescription">
        <Form.Label>Descripcion</Form.Label>
        <Form.Control type="text" placeholder="Descripcion" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formDuedate">
        <Form.Label>Fecha de Vencimiento</Form.Label>
        <Form.Control type="text" placeholder="Vencimiento" />
      </Form.Group>
      <Button variant="info" type="submit">
        Agregar tarea
      </Button>
    </Form>
  );
}

export default Formulario;