// import { ChangeEvent } from "react";
import { FC } from "react";
import { ITask } from "./interface";
import "./main.css";

interface Props{
    task : ITask
    handler: (target: ITask) => void
}

const ToDoTask:FC<Props> = ({task, handler}) =>{
    const handleCheck = ()=>{
        
        handler(task);
        console.log("called handled")
    }
    return (

        <div className = "singleTask">
            {task.completion ? 
            (<input id = "checkbox" type="checkbox" onChange = {handleCheck} checked/> )
            :
            (<input id = "checkbox" type="checkbox" onChange = {handleCheck}/> )
            }
            <label> Task {task.taskID}: {task.taskName}</label>
            
        </div>
    )
}


export default ToDoTask