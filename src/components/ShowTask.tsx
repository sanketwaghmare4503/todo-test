

import { useTodoContext } from "../utility/TodoContext";




const ShowTask: React.FC = () => {


    const { todos, deleteTodo } = useTodoContext();


    console.log(todos)


    return <div>


        {
            todos.map((taskdata, index) => {
                return <div id="task-container" key={index}>

                    <label>Name : {taskdata.name}</label>
                    <label>Description: {taskdata.description}</label>
                    <label>Start Date: {taskdata.startDate}</label>
                    <label>End Date: {taskdata.endDate}</label>
                    <label className="material-icons" style={{ color: "red", cursor: "pointer", }} onClick={() => deleteTodo(taskdata.id)}>&#xe872;</label>
                </div>
            })
        }


    </div>
}


export default ShowTask;