import React, { useState } from 'react';

var items = ['Eat', 'Drink', 'Sleep'];


const Todo = (props) => {
    const [text, removeValue] = useState(items);
    const removeItem = (id) => {
        //console.log("incom")
        let newitems = items.filter((taskId) => taskId !== id);
        //console.log(newitems)
        removeValue(newitems);
        items = newitems;
    };

    const [taskText, editValue] = useState(items);
    const editItem = (id) => {
        console.log("incom")
        let newitems = taskText.filter((taskId) => taskId !== id);
        //console.log(newitems)
        editValue(newitems);
        items = newitems;
    }
    
    return (
        <>
            {items.map((task) => {
                return (
                    <div>
                        <span>{task}</span>
                        <input readOnly="true" value={task} ></input>
                        <button className='btn' onClick={() => editItem(task)}  >edit</button>
                        <button className='btn' onClick={() => removeItem(task)} >delete</button>
                    </div>);
            })}
        </>
    );
}
export default Todo;