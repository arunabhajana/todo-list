import { useState } from "react";

const Todo = () => {

const [todolist,setTodo] = useState([]);
const [task , setTask] = useState("");

const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) { 
        setTodo([...todolist, task]);
        setTask("");
    }
};
    return (
        <div className="todo">
            <form onSubmit={handleSubmit}>
                <input type="text" 
                placeholder="Enter Task" 
                value={task} 
                onChange={(e) => setTask(e.target.value)}
                />
                <button type="submit">Add</button>
            </form>
            <ul>
                {todolist.map((item , index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default Todo;