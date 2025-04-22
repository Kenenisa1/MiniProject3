import React,{ useState } from "react";

function ToDoList()
{
    const [tasks, setTask] = useState(["Eat Breakfast", "Take a shower"]);
    const [newTask, setNewTask]= useState("");

    function handleInputChange(event)
    {
        setNewTask(event.target.value);
    }

    function addTask()
    {
        
        if(newTask.trim() !=="")
        {
            setTask(t=> [...t,newTask]);
            setNewTask("");
        }
    }

    function deleteTask(index)
    {
        const updatedTask =tasks.filter((_,i)=> i !== index );
        setTask(updatedTask);
    }

    function moveTaskUp(index)
    {
        if(index >0)
        {
            const updatedTasks =[ ...tasks];
            [updatedTasks[index],updatedTasks[index-1]]=
            [updatedTasks[index-1], updatedTasks[index]];
            setTask(updatedTasks);
        }
    }

    function moveTaskDown(index)
    {
        if(index < tasks.length-1)
            {
                const updatedTasks =[ ...tasks]
                [ updatedTasks[index-1],updatedTasks[index]]=
                [updatedTasks[index], updatedTasks[index-1]];
                setTask(updatedTasks);
            }
    }

    return(
        <div className="to-do-list">
            <h1>To Do List</h1>
            <div>
                <input type="text"
                       placeholder="Enter a task..."
                       value={newTask}
                        onChange={handleInputChange}/>
                <button className="add-button"
                        onClick={addTask}>
                            Add
                </button>
            </div>
            <ol>
                {tasks.map((task,index) =>
                    <li key={index}>
                        <span className="text">
                            {task}
                        </span>
                        <button className="delete-button" onClick={() =>deleteTask(index)}>
                            Delete
                        </button>
                        <button className="move-button" onClick={() =>moveTaskUp(index)}>
                             Move Up
                        </button>
                        <button className="move-button" onClick={() =>moveTaskDown(index)}>
                            Move Down
                        </button>

                    </li>
                )}
            </ol>

        </div>
    )
}

export default ToDoList