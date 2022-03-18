import {ITask} from "./main/interface";
export const complete = (n:ITask)=> ({type: "COMPLETE", newtask: n});
export const incomplete = (n:ITask)=>({type: "INCOMPLETE", newtask : n});