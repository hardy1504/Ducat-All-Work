import React, { useState } from 'react'
import AppName from './AppName'
import AddTaskFrame from './AddTaskFrame'
import TaskContainer from './TaskContainer'

    const ReminderApp = () => {
     const[taskList,setTaskList] =  useState([
            {
                work:"Go to Home",
                workDate:"2025-11-10"
            },
            {
                work:"Go to Atm",
                workDate:"2025-11-25"
            },
            {
                work:"Go to get milk",
                workDate:"2025-12-05"
            },
        ])
     
        const addTask = (task)=>{
            setTaskList([...taskList,task])
        }

        const handleDelete = (taskIndex)=>{ 
          const isDelete  = confirm("Are you sure You Want to Delete")
          if(isDelete){
          const afterFilter =   taskList.filter((elm,ind) => ind != taskIndex)
          setTaskList(afterFilter)
          }
          
        }
  return (
    <div className='container'>
        <div className="row">
            <div className="col-8 mx-auto text-center"> 
                <AppName/>
                <AddTaskFrame addTask={addTask}/>
                <TaskContainer taskList={taskList} handleDelete={handleDelete}/>
            </div>
        </div>
    </div>
  )
}

export default ReminderApp  