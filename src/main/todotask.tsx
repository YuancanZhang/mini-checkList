// import { ChangeEvent } from "react";
import { ITask } from "./interface";
import "./main.css";
interface Props{
    task : ITask
}

const ToDoTask = ({task} : Props) =>{
    // const handleChange = (event: ChangeEvent<HTMLInputElement>) : void => {
        
    // }
    return (

        <div className = "singleTask">
            <input id = "checkbox" type="checkbox" /> <label> Task {task.taskID}: {task.taskName}</label>
        </div>
    )
}

export default ToDoTask;