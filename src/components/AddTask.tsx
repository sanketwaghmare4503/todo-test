import React, { useState } from 'react';
import { Todo, useTodoContext } from '../utility/TodoContext';






const AddTask: React.FC = () => {

  const [taskData, setTaskData]=useState<Todo >({ id: 6783273,
    name: "string",
    description: "string",
    startDate: "string",
    endDate: "string"
    })

  const handleChange = (name: string,value: string)=>{
    setTaskData((prev)=>({...prev, [name]: value}))
  }





  const { addTodo } = useTodoContext()

  function handleSubmission(){
    addTodo(taskData?.name,taskData?.description,taskData?.startDate,taskData?.endDate)
  }



  return (
    <div id='add-text-container'>
      {/* <label style={{ color: "red" }}>{erorr ? "All Fields are Manadatory" : null}</label> */}

      <input type='text' name='name' id='task-input' required placeholder='Name' value={taskData?.name} onChange={(e) => handleChange("name", e.target.value)} />
      <input type='textarea' name='description' id='task-input' required placeholder='Description' onChange={(e) => handleChange("description", e.target.value)} />
      <label>Start Date</label>
      <input type='date' name='startdate' required onChange={(e) => handleChange("startDate",e.target.value)} />
      <label>End Date</label>
      <input type='date' name='startdate' required onChange={(e) => handleChange("endDate",e.target.value)} />


      <button onClick={() => handleSubmission()} id='btn'>Add Task</button>

    </div>
  );
}

export default AddTask;