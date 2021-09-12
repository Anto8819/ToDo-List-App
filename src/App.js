import React from 'react'
import './CSS/main.scss';
import { Route, Redirect } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import AddTodo from './components/AddTodo/AddTodo';
import TodoDetail from './components/TodoDetail/TodoDetail';
import { connect } from 'react-redux';



// En este componente deberias cargar tus rutas.
export function App({todos}) {

  function onFilter(todoId){
    let todo = todos.filter(t => t.id === parseInt(todoId))
    return todo[0];
  }

  return (

    <div className="App">
      
        <Route path= '/'>
          <Nav/>
        </Route>
        <Route exact path= '/'>
          <Home/>
        </Route>
        <Route path= '/add'>
          <AddTodo/>
        </Route>
        <Route 
        exact path='/edit/:Id'
        render = {({match}) =>{
          return (
            // todos.filter(t => t.id === parseInt(match.params.Id)).length === 0?
            !onFilter((match.params.Id))?
            <Redirect to ="/" />:
            <TodoDetail todo={onFilter(match.params.Id)}/>
          )
        }}
        />
      
    </div>
  );
}

function mapStateToProps(state){
  return{
    todos:state
  }
}

export default connect (mapStateToProps,null)(App);
