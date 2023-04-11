import { useSate } from "react"
import TodoForm from "./TodoForm"
import TodoList from "./TodoList"
import ClearTask from "./ClearTask"
import "./TodoApp.css"
import { useState } from "react"
function TodoApp () {
    const [todoList, setTodoList] = useState ([])
    console.log("todolist::",todoList)
    return (
        <div className = "todo-app">
            <h1 className = "title">Todo App</h1>
            <TodoForm setTodoList = {setTodoList} />
            <TodoList tasks = {todoList}/>
            <ClearTask setTodoList = {setTodoList} numTasks = {todoList.length}/>
            
        </div>
    )
}
export default TodoApp