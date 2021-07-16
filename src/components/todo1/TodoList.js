import React, {useEffect, useState} from 'react';
import todoService from "./todoService";
import TodoRead from "./TodoRead";
import TodoRegister from "./TodoResiter";

const initState = {
    dtoList:[],
    pageList:[],
    page:1,
    size:0,
    start:0,
    end:0,
    totalPage:0,
    prev:false,
    next:false
}


const TodoList = () => {

    const [data, setData] = useState(initState)
    const [loading, setLoading] = useState(false)
    const [flag, setFlag] = useState(false)
    const [targetTno, setTargetTno] = useState(null)

    useEffect(() => {
        setLoading(true)
        todoService.getList(data.page).then(resJson => {
            setData(resJson)
            setLoading(false)
        })
    },[data.page, flag])

    const movePage = (num) => {
        setTargetTno(null)
        setData({...data, page:num})
        setFlag(!flag)
        // 투두레지스터에서 1을 넣으면 타겟tno 를 널값으로 바꾼다
    }

    const readTodo = (tno) => {
        setTargetTno(tno)
    }

    const list = data.dtoList.map(t => <li key={t.tno} onClick={()=>readTodo(t.tno)} >{t.tno} - {t.title}</li> )

    return (
        <div>
            <button onClick={() => movePage(3) }>MOVE</button>
            {loading ? <h3>Loading....</h3> :
                <>
                    <ul>
                        {list}
                    </ul>
                    <PageList data={data} movePage ={movePage}></PageList>
                    <hr/>
                    {targetTno && <TodoRead targetTno ={targetTno} movePage ={movePage}></TodoRead> }
                    <hr/>
                    {/*<TodoRegister movePage ={movePage} ></TodoRegister>*/}
                    <TodoRegister movePage={movePage}></TodoRegister>
                </>
            }
        </div>
    )
}


const PageList = ({data, movePage}) => {

    return (
        <>
            {data.prev && <button onClick={() => movePage(data.start - 1)}>PREV</button>}
            {data.pageList.map(p => <button key={p} onClick={() => movePage(p)}>{p}</button>)}
            {data.next && <button onClick={() => movePage(data.end +1)}>NEXT</button>}
        </>
    )

}

export default TodoList;