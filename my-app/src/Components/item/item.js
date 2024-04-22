import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './item.scss'

function Item() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
      <Card.Text className='fw-bold'>
          Nombre
        </Card.Text>
        <Card.Text>Realizar Proyecto</Card.Text>
        <Card.Text className='fw-bold'>
          Descripcion
        </Card.Text>
        <Card.Text>
          Elaborar Proyecto del curso de Desarrollo de Aplicaciones Web.
        </Card.Text>
        <Button variant="info">Remover</Button>
      </Card.Body>
    </Card>
  );
}

export default Item;