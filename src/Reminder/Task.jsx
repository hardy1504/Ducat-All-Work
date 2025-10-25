import React from 'react'
import { MdAutoDelete } from "react-icons/md";

const Task = ({elm:{work,workDate},handleDelete,ind}) => {
  return (
    <div className="row d-flex align-items-center ">
        <div className="col-5">{work}</div>
        <div className="col-5">{workDate}</div>
        <div className="col-2">
            <button className='btn btn-danger d-flex justify-content-center align-items-center' onClick={()=>handleDelete(ind)}>
             <MdAutoDelete />
             </button>
        </div>
    </div>
  )  
}

export default Task 