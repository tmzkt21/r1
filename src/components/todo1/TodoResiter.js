import React, {useState} from 'react';
import todoService from "./todoService";

const initState = {
    title:'',
    content:''
}

const TodoRegister = ({movePage}) => {

    const [todo, setTodo] = useState({...initState})

    const change = (e) => {
        console.log(e.target.name)
        console.log(e.target.value)
        todo[e.target.name] = e.target.value
        // e.target.value = 현재 input 에 입력한 값이 무엇인지 알 수 있습니다.
        // 객체 안에서 key를 [ ]로 감싸면 그 안에 넣은 레퍼런스가 가리키는 실제 값이 key 값으로 사용됩니다.
        // 인풋값을 [] 키값으로 사용되게한다,,?
        setTodo({...todo})
    }

    const resetTodo = () => {
        setTodo(initState)
        // 리셋시 ...initState 새로운 initState 할당
    }


    const clickRegister = async () => {
        const result = await todoService.registTodo({...todo})
        console.log(result)
        movePage(1)
        // 가입시도하면 1페이지로 가라는거아닌가..? 왜안먹지
    }

    return (
        <div>
            <div>
                <input type={'text'} name={'title'} value={todo.title}  onChange={change} />
            </div>
            <div>
                <input type={'text'} name={'content'} value={todo.content}   onChange={change} />
            </div>
            <div>
                <button onClick={clickRegister}>REGISTER</button>
                <button onClick={resetTodo}>RESET</button>
            </div>
        </div>
    );

};

export default TodoRegister;