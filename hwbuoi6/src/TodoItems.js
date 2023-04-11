

function TodoItems (props) {
    const {title, itemId, list} = props
    console.log(props)
    const deleteTask = () => {
        console.log(itemId)
    }
    return (
        <div className="todo-container">
            <div className="todo-item">
                <span>{title}</span>
                <button onClick = {deleteTask}>X</button>
            </div>
        </div>
    )
}
export default TodoItems;