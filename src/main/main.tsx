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
            const newTask = {taskName : newtask, taskID : count, completion: false}
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


    const update = (target: ITask):void =>{
        let index = todolist.findIndex(i => i.taskName === target.taskName && i.taskID === target.taskID);
        todolist[index].completion = !todolist[index].completion;
        settodolist([...todolist]);
    }

    return (
        <div className = "main">
            
            <div className = "split addtaskArea">
                <p>CHECK LIST</p>
                <input type="text" name = "newtask" placeholder = "new task here" onChange = {handleChange}></input>
                <button onClick = {handleAddTask}>Add</button>

            </div>
            <div className = "split displaytask">
                {todolist.map((task : ITask, key : number)=>{
                    if(!task.completion){
                        return <ToDoTask key = {key} task={task} handler={update}/>
                    }
                })}
            </div>
            <div className = "split completetitle">
                <p>COMPLETED LIST</p>
            </div>
            <div className = "split displaycompleted">
                
                {todolist.map((task: ITask, key: number)=>{
                    if(task.completion){
                        return <ToDoTask key = {key} task={task} handler={update}/>
                    }
                })}
            </div>
        </div>
    )
}



export default Main