import React from 'react';
import Todos from '../Todos/Todos';

export function Home({key}) {
  return (
    <div className='container h-80 '>
      <div className = 'row vh-100 '>
        <Todos className="col-sm-4" status="Pending" key='1' />
        <Todos className="col-sm-4" status="In Progress" key='2'/>
        <Todos className="col-sm-4" status="Done" key='3'/>
      </div>
    </div>
    
  )
};

export default Home;