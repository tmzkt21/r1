import React, {useEffect, useState} from 'react';
import todoService from "./todoService";
import TodoList from "./TodoList";

const TodoBoard = () => {

    const [now, setNow] = useState('')
    const [flag, setFlag] = useState(false)

    console.log("TodoBoard...............")

    useEffect(() => {
        todoService.getTime().then((res) => {
            setNow(res.data)
        } )
    },[ flag ])

    const getTime = () => {
        setFlag(!flag)
    }

    return (
        <div>
            <h1>Simple Todo {now} </h1>
            <button onClick={getTime}>CLICK</button>
            <TodoList></TodoList>
        </div>
    );
};

export default TodoBoard;