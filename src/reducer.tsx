import React, { useReducer } from 'react';
import {ITask} from "./main/interface";

export interface IList{
    todoList: ITask[];
    completeList: ITask[];
}
export interface IAction{
    type: string;
    targetTask: ITask;
}
  
const initialState : IList = {
    todoList : [],
    completeList : []
}

  
export default function reducer(state = initialState, action: IAction) {
    switch(action.type){
        case 'COMPLETE':
            delete state.todoList[state.todoList.indexOf(action.targetTask)];
            return {todoList: state.todoList, completeList: [...state.completeList, action.targetTask]}
        case 'INCOMPLETE':
            delete state.completeList[state.completeList.indexOf(action.targetTask)];
            return {todoList: [...state.todoList, action.targetTask], completeList: state.completeList}
        default:
            return state
    }
}



