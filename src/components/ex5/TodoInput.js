import React, {useState} from 'react';

// 유지해야하는 데이터는 골격을 잡아가면서 들어가라
// 데이터에 규격을 잡아야한다
// 자료주도의 프로토타입 바깥쪽에 잡는다

// 데이터 원형은 바깥쪽에 선언!!
// 객체로잡음 함수에 넣지않았음 한번만 만들면되기때문에 객체에담음!!
//함수는 렌데링할때 마다 실행되기때문에.. 객체
const initState = {
    title: '',
    content: ''
}
const TodoInput = () => {
    // 데이터를 state로 만들자
    // useState 를 많이 쓰면안좋다고한다..
    const [todo, setTodo] = useState({...initState})
    // 복사본을 뜨자 {...initState} initState 깊은복사로 state 를 넣어주자
    // 줄여서 씀 onChange={(e) =>{}} = 태그마다 써주기 싫어서 함수만듬
    const change = (e) => {
        console.log(e.target.name +"타겟네임")
        // title타겟네임
        console.log(e.target.value +"타겟밸류")
        // 인풋에 입력을 하는 순간 ㅁ타겟밸류 ㅁ을 넣음
        // target.value = value={todo.title} title 또는 value 를 인식
        todo[e.target.name] = e.target.value
        // target.value 값을 target.name 에 담음
        //setTodo(todo)
        //객체가 바꿔야함
        setTodo({...todo})
        // 객체가 바뀌게코딩

        // 제목도 처리하고 내용도 처리하고
        // todo. = 정적코딩
    }
    const resetTodo = () => {
        setTodo({title: '', content: ''})
    }
    return (
        <div>
            <div>
                <input type={"text"} name={'title'} value={todo.title} onChange={change}/>
            </div>
            <div>
                <input type={"text"} name={'content'} value={todo.content} onChange={change}/>
            </div>
            <div>
                <button onClick={resetTodo}>RESET</button>
            </div>
        </div>
    );
};

export default TodoInput;