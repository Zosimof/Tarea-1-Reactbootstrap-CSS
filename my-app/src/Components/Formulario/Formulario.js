import React, { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { addGoal } from '../../Reducers/goalsSlice';

function Formulario(props) {
  const inputRefName = useRef();
  const inputRefDescripcion = useRef();
  const inputRefdueDate = useRef();
  
  const dispatch = useDispatch();
  const [nextId, setNextId] = useState(1); 

  const addItem = (e) => {
    e.preventDefault();
    dispatch(addGoal({
      name: inputRefName.current.value,
      descripcion: inputRefDescripcion.current.value,
      dueDate: inputRefdueDate.current.value,
      id: nextId
    }));
    setNextId(prevId => prevId + 1); 
  };

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" placeholder="Nombre de la tarea" ref={inputRefName} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formDescription">
        <Form.Label>Descripcion</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder="Descripcion" ref={inputRefDescripcion} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formDuedate">
        <Form.Label>Fecha de Vencimiento</Form.Label>
        <Form.Control type="date" placeholder="Vencimiento" ref={inputRefdueDate} />
      </Form.Group>
      <Button variant="info" type="submit" onClick={addItem}>
        Agregar tarea
      </Button>
    </Form>
  );
}

export default Formulario;