import React from "react";
import Task from "./Task";

const TaskContainer = ({ taskList, handleDelete }) => {
  return (
    <>
      <ul className="list-group my-2">
        {taskList.length == 0 ? (
          <h1>|-; You Have Finished Your All Task Successfully ;-|</h1>
        ) : (
          taskList.map((elm, ind) => (
            <li className="list-group-item border-0 my-2" key={ind}>
              <Task elm={elm} handleDelete={handleDelete} ind={ind} />
            </li>
          ))
        )}
      </ul>
    </>
  );
};

export default TaskContainer;
