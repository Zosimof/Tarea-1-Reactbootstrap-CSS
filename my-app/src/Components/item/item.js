import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './item.scss';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo } from '../../Reducers/todoSlice';
import { removeGoal } from '../../Reducers/goalsSlice';



function Item(props) {
  const option = useSelector((state) => state.option.value);
  const dispatch = useDispatch();
  const removeItem = (e) => {
    e.preventDefault();
    if(option === 'goals') 
      dispatch(removeGoal(props.id))
    if(option === 'tasks')
    dispatch(removeTodo(props.id));
  };

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
      <Card.Title >{props.name}</Card.Title>
        <Card.Text className='fw-bold'>
          Descripcion
          </Card.Text>
        <Card.Text >
        {props.description}
        </Card.Text>
        <Card.Text className='fw-bold'>
          Fecha de Vencimiento
        </Card.Text>
        <Card.Text>
          {props.dueDate}
        </Card.Text>
        </Card.Body>
        <Card.Body>
        <Button variant="info" onClick={removeItem}>Remover</Button>
      </Card.Body>
    </Card>
  );
}

export default Item;