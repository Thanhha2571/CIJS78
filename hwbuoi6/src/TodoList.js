import TodoItems from "./TodoItems";
function TodoList(props) {
    const {tasks} = props
    console.log("task::",tasks)
    return (
        <div className="todo-container">
            {tasks.map((tasks) => (<TodoItems list = {tasks} key = {tasks.id}  title = {tasks.title} itemId ={tasks.id}  />))}
            
        </div>
    )
}
export default TodoList;