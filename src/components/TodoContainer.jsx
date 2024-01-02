import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";
import { useState } from "react";

function TodoContainer(){
    const [activityArr, setActivityArr]= useState([
        {
            id: 1,
            activity: "Wake up at 5am"
        },
        {
            id: 2,
            activity: "Drink Water"
        }
    ])

    return (
        <div>
            <div className="flex flex-wrap gap-5">
                <AddTodoForm activityArr={activityArr} setActivityArr={setActivityArr} />
                <TodoList activityArr={activityArr} setActivityArr={setActivityArr} />
            </div>
        </div>
    )
}

export default TodoContainer