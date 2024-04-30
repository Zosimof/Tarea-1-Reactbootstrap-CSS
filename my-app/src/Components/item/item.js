import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './item.scss';
import { useDispatch } from 'react-redux';
import { removeGoal } from '../../Reducers/removeSlice';


function Item(props) {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeGoal({ id: props.id }));
  };

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
      <Card.Title >{props.name}</Card.Title>
        <Card.Text className='fw-bold'>
          Descripcion
          </Card.Text>
        <Card.Text >
        {props.descripcion}
        </Card.Text>
        <Card.Text className='fw-bold'>
          Fecha de Vencimiento
        </Card.Text>
        <Card.Text>
          {props.dueDate}
        </Card.Text>
        </Card.Body>
        <Card.Body>
        <Button variant="info">Editar</Button> 
        <Button variant="info" onClick={handleRemove}>Remover</Button>
      </Card.Body>
    </Card>
  );
}

export default Item;