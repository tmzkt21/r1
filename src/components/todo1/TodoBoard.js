import React, {useEffect, useState} from 'react';
import todoService from "./todoService";
import TodoList from "./TodoList";
import {useSelector} from "react-redux";
import AsyncTime from "../async/asyncTime";

const TodoBoard = () => {
    const countObj = useSelector(state => state.count)
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
            <h2>{countObj.count}</h2>
            <AsyncTime></AsyncTime>
            <button onClick={getTime}>CLICK</button>
            <TodoList></TodoList>
        </div>
    );
};

export default TodoBoard;