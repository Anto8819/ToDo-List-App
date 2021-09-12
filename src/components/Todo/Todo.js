import React from 'react';
import { removeTodo } from '../../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export function Todo({title,id,removeTodo}) {
  return (
    <div className='d-flex justify-content-between'>
      <Link className= ' text-decoration-none text-danger ' to={`/edit/${id}`}  key={id}> 
      {title}
      </Link>
      <button className="btn btn-outline-danger btn-sm" onClick={()=>removeTodo(id)}>Delete</button>
    </div>
  )
};

export default connect(null, {removeTodo}) (Todo)