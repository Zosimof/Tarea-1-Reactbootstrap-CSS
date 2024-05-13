import logo from './logo.svg';
import './App.scss';
import Item from './Components/item/item';
import Formulario from './Components/Formulario/Formulario';
import mobileButton from './Components/mobileButton/mobileButton';
import Menu from './Components/Menu/Menu';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { initaddTodo } from './Reducers/todoSlice';
import { initaddGoal } from './Reducers/goalsSlice';




function App() {
  const goals = useSelector((state)=>state.goals.value);
  const option = useSelector((state)=>state.option.value);
  const todos = useSelector((state)=>state.todos.value);
  const dispatch = useDispatch();
  function initFetch() {
    fetch("http://localhost:3001/tasks/getTasks",{
      method:"GET",
      headers: {
          "Content-Type":"application/json",
          "Authorization":"123456"
      }
  })
  .then((response) =>{
    return response.json()
  }).then((response) => {
    response.map((task) => {
      dispatch(initaddTodo(task));
    })
  }).catch(err =>{ 
      console.log(err);
  })
  }
  useEffect(() =>{
    initFetch();
  },[])

  return (

    <div className="App">
      <Menu/>
          <Container>
      <Row>
        <Col xs={0} md={0} className='d-none d-sm-block d-sm-none d-md-block '>
          <Formulario>
          </Formulario>
        </Col>
        <Col xs={0} md={0}>
          <Row className='d-md-none'>
            <div className='bg-transparent overlapping-div ' >
              <mobileButton className='float-left'/>
            </div>
          </Row>
          <Row>
        <div className='scrolling'>
          { option==='tasks' &&
          todos.map((todo,index)=>(
          <Item key={index} id={todo.id} name={todo.name} descripcion={todo.descripcion} dueDate={todo.dueDate}/>
        ))}
        </div>
        <div className='scrolling'>
          {  option==='goals' &&
          goals.map((goal,index)=>(
          <Item key={index} id={goal.id} name={goal.name} descripcion={goal.descripcion} dueDate={goal.dueDate}/>
        ))}
        </div>
        </Row>
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default App;