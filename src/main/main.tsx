import "./main.css"
import {ChangeEvent, useState} from "react"
import ToDoTask from "./todotask";
import {ITask} from "./interface";
const Main = ()=>{
    const [count, setcount] = useState<number>(1);
    const [newtask, setnewtask] = useState<string>("");
    const [todolist, settodolist] = useState<ITask[]>([]);

    const handleAddTask = () : void =>{
        if(newtask !== ""){
            const newTask = {taskName : newtask, taskID : count}
            setcount(count + 1);
            settodolist([...todolist, newTask]);
            
        }
        console.log(todolist)
    }
    
    const handleChange = (event: ChangeEvent<HTMLInputElement>) : void =>{
        console.log("changed")
        if(event.target.name === "newtask"){
            setnewtask(event.target.value);
        }
    }

    return (
        <div className = "main">
            
            <div className = "addtaskArea">
                <p>CHECK LIST</p>
                <input type="text" name = "newtask" placeholder = "new task here" onChange = {handleChange}></input>
                <button onClick = {handleAddTask}>Add</button>

            </div>
            <div className = "displaytask">
                {todolist.map((task : ITask, key : number)=>{
                    return <ToDoTask key = {key} task={task} />
                })}
            </div>
        </div>
    )
}


export default Main