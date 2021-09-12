import React from 'react';
import { connect } from 'react-redux';
import Todo from '../Todo/Todo';



export function Todos({todos, status, key}) {

function renderTodos(t){
  if (t.status === status){
    return (
        <li className="list-group-item">
          
            <Todo 
            key={t.id}
            title={t.title}
            id={t.id}
            />
         
          
        </li>
    )
  }
}





  return (
    
      <div className = "col-sm-4 m-auto">
        <div className="card">
          <div className="card-header bg-danger text-primary text-center border border-primary ">
            <span key={key}>{status}</span>
          </div>
          <ul className="list-group list-group-flush text-dark">
            {todos.map(renderTodos)}
          </ul>          
        </div>

      </div>

    
    
  )
};

function mapStateToProps (state) {
  return{
    todos: state
  }
}

export default connect(mapStateToProps, null) (Todos);