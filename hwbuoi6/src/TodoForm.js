function TodoForm (props) {
    const {setTodoList} = props;

    const onSubmit = (event) =>{
        event.preventDefault();
        const valueInput = event.target.todoInput.value;
        setTodoList((prev) => {
            const newTodoList = [... prev]
            newTodoList.push ({
                title: valueInput,
                id: newTodoList.length+1
            })
            return newTodoList;
        });
    };
    return(
         
        <div className = "todo-form">
            <form onSubmit = {onSubmit}>
                <input name ="todoInput" className = "todo-input" placeholder = "enter your task" type = "text"/>
                <button className = "todo-button">Add to list</button>
            </form>
        </div>
    )
}
export default TodoForm;