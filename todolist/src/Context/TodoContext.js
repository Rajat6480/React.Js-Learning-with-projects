import { useContext , createContext } from "react";

export const TodoContext = createContext({
    // values
    todos: [{
        id:1,
        todo:"Todo msg",
        completed:false,
    }],
    // methods
    addTodo:(todo)=>{},
    updatedTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    toggleComplete:(id)=>{}

}) 

export const useTodo = () =>{
    return useContext(TodoContext);
}

export const TodoProvider = TodoContext.Provider