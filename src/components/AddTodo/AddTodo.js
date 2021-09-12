import React from 'react';
import { addTodo } from '../../actions';
import swal from 'sweetalert';

import { connect } from 'react-redux';

// Nota 1: Para utilizar el hook `useState` para el manejo de estados de los inputs, tendras que utilizarlo de la siguiente manera
//React.useState

// Nota 2: En este componente tendras que usar la funcion `connect` de react-redux para conectarte al store. 
// Si usas el hook `useDispatch` no funcionaran los test.

export function AddTodo({addTodo}) {

  const [task,setTask] = React.useState({
    title:'',
    description:'',
    place:'',
    date:''
  })

  function handleInputChange (e) {

    const {name,value} = e.target;
    
    setTask({
      ...task,
      [name]:value
    })
  }

  function handleSubmit (e) {
    e.preventDefault();
    addTodo(task)
    setTask({
      title:'',
      description:'',
      place:'',
      date:''
    })
    swal('New Task Added')
    
  }

  return (
    <div className="row d-flex justify-content-center text-white p-5">
      <div className="col-md-6 text-center" >
        <form className='p-5 text-white' onSubmit={handleSubmit}>
              <div className= "form-group row text-start">
                <label className="col-md-3 col-form-label">Title</label>
                <div className="col-md-9">
                  <input
                    
                    type='text'
                    name='title'
                    value={task.title}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className= "form-group row text-start">
                <label className="col-md-3 col-form-label">Description</label>
                <div className="col-md-9">
                  <textarea
                    name='description'
                    value={task.description}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className= "form-group row text-start">
                <label className="col-md-3 col-form-label">Place</label>
                <div className="col-md-9">
                  <input
                    type='text'
                    name='place'
                    value={task.place}
                    onChange={handleInputChange}
                  />

                </div>
                
              </div>
              <div className= "form-group row text-start">
                <label className="col-md-3 col-form-label">Date</label>
                <div className="col-md-9 ">
                  <input
                    type='date'
                    name='date'
                    value={task.date}
                    onChange={handleInputChange}
                  />
                </div>
                
              </div>
              <div className="form-group row text-start">
                <div className="col-md-9">
                  <button className="btn btn-outline-primary mt-3"type='submit'> Add </button>   
                </div>
              </div>
            </form>
            </div>
            </div>

  )
};

export default connect(null, {addTodo})(AddTodo)