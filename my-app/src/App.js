import logo from './logo.svg';
import './App.scss';
import Item from './Components/item/item';
import Formulario from './Components/Formulario/Formulario';
import mobileButton from './Components/mobileButton/mobileButton';
import Menu from './Components/Menu/Menu';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useSelector } from 'react-redux';

const tareas = [{
  name: 'Terminar Proyecto',
  descripcion: 'Realizar todas las actividades del curso',
  dueDate: '05/10/2024'
},
{
  name: 'Terminar Tarea 2',
  descripcion: 'Realizar todas las actividades del curso',
  dueDate: '04/28/2024'
}]

function App() {
  const goals = useSelector((state)=>state.goals.value);

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
          { goals.map((tarea,index)=>(
          <Item key={index} id={tarea.id} name={tarea.name} descripcion={tarea.descripcion} dueDate={tarea.dueDate}/>
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