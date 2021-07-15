import React, {useEffect, useState} from 'react';
import todoService from "./todoService";

const initState = {
    tno:'',
    title:'',
    content:'',
    regDate:'',
    modDate:''
}

const TodoRead = ({targetTno, movePage}) => {

    const [todo, setTodo] = useState(initState)

    useEffect(() => {
        todoService.getOne(targetTno).then(result => {
            console.log(result)
            setTodo({...result})
        })
    },[targetTno])

    const change = (e) => {
        todo[e.target.name] = e.target.value
        setTodo(todo)
    }

    const clickDel = async () => {
        const {tno,title,content} = todo;
        const param = {tno:tno, title:title, content:content}
        console.log(param)
        const result = await todoService.removeOne(param)

        setTimeout(() => {

            movePage(1)

        },1000)

    }

    return (
        <div>
            <h1>Todo Read</h1>
            <div>
                <h3>{todo.tno}</h3>
            </div>
            <div>
                <input type={'text'} name={'title'} value={todo.title}  onChange={change}/>
            </div>
            <div>
                <input type={'text'} name={'content'} value={todo.content} onChange={change}/>
            </div>
            <div>
                <button>MOD</button>
                <button onClick={clickDel}>DEL</button>
            </div>
        </div>
    );
};

export default TodoRead;