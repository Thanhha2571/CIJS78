function ClearTask(props) {
    const {setTodoList,numTasks} = props
    const clearList = () => {
        setTodoList([])
    }

    return (
        <div className="clear-task">
            <p>you have {numTasks} pending tasks</p>
            <button onClick = {clearList}>Clear All</button>
        </div>
    )
}
export default ClearTask;