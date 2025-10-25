import React, { useState } from 'react'
import { IoMdAddCircle } from "react-icons/io";

const AddTaskFrame = ({addTask}) => {

    const [taskDetail,setTaskDetail] = useState({
        work:"",
        workdate:""
    })
    const {work,workdate} = taskDetail
    const handleAddTask = ()=>{
        addTask(taskDetail)
        setTaskDetail({
        work:"",
        workdate:""
    })
        // console.log(taskDetail);  
    }
  return (
    <div className='row'>
        <div className="col-5">
            <input 
            type="text" 
            name='work'
            value={work}
            className='form-control' 
            onChange={(e)=>
            setTaskDetail({...taskDetail,[e.target.name]:e.target.value})}/>
        </div>
        <div className="col-5">
            <input 
            type="date"
            name='workDate'
            value={workdate}
            className='form-control'
            onChange={(e)=>
            setTaskDetail({...taskDetail,[e.target.name]:e.target.value})}/>
        </div>
        <div className="col-2">
            <button className=' btn btn-success d-flex justify-content-center align-items-center' onClick={handleAddTask}>
             <IoMdAddCircle />
            </button>
        </div>
    </div>
  )
}

export default AddTaskFrame  