import React, { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo } from '../../Reducers/todoSlice';
import { addGoals } from '../../Reducers/goalsSlice';

function Formulario(props) {
  const option = useSelector((state) => state.option.value);
  const inputRefName = useRef();
  const inputRefDescription = useRef();
  const inputRefdueDate = useRef();
  
  const dispatch = useDispatch();
  
  const addItem = (e) => {
    let timestamp = Date.now() + Math.random(); 
    e.preventDefault();
    if(option === 'goals') 
      dispatch(addGoals({
      'name': inputRefName.current.value,
      'description': inputRefDescription.current.value,
      'dueDate': inputRefdueDate.current.value,
      'id':timestamp
    }));
    if(option ==='tasks')
      dispatch(addTodo({
        'name': inputRefName.current.value,
        'description': inputRefDescription.current.value,
        'dueDate': inputRefdueDate.current.value,
        'id':timestamp
      }));
  };

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" placeholder="Nombre de la tarea" ref={inputRefName} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formDescription">
        <Form.Label>Descripcion</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder="Descripcion" ref={inputRefDescription} />
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