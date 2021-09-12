import React from 'react';
import { connect } from 'react-redux';
import { toInProgress } from '../../actions';
import { toDone } from '../../actions';


export function TodoDetail({todo, toInProgress, toDone}){

    
    function handleClickProgress(id){
       toInProgress(id);
    }

    function handleClickDone(id){
        toDone(id);
     }
     console.log(todo)
    
    return(
        <div className="row d-flex justify-content-center text-white p-5">
                <div className="col-md-5 text-center" >
                    <h1 className=""> {todo.title}</h1>
                    <div >
                        <div>Description: {todo.description}</div>
                        <div>Place: {todo.place}</div>
                        <div>Date: {todo.date}</div>
                        <div>Status: {todo.status}</div>
                        <div className="m-3"> 
                            <h4>Change status to</h4>
                            <button className="btn btn-outline-primary me-2" onClick={()=>handleClickProgress(todo.id)}>In Progress</button>
                            <button className="btn btn-outline-primary" onClick={()=>handleClickDone(todo.id)}>Done</button>
                        </div>
                            
                    </div>
            </div>
        </div>
        

    )
   
}

export default connect(null, {toInProgress, toDone}) (TodoDetail)