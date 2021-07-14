import React, {useEffect, useState} from 'react';
import todoService from "./todoService";

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

    useEffect(() => {
        setLoading(true)
        todoService.getList(data.page).then(resJson => {
            setData(resJson)
            setLoading(false)
        })
    },[data.page])

    const movePage = (num) => {
        setData({...data, page:num})
    }

    const list = data.dtoList.map(t => <li key={t.tno}>{t.tno} - {t.title}</li> )

    return (
        <div>
            <button onClick={() => movePage(3) }>MOVE</button>
            {loading ? <h3>Loading....</h3> :
                <>
                    <ul>
                        {list}
                    </ul>
                    <PageList data={data} movePage ={movePage}></PageList>
                </>
            }
        </div>
    )
}


const PageList = ({data, movePage}) => {

    return (
        <>
            {data.prev && <button onClick={() => movePage(data.start - 1)}>PREV</button>}
            {data.pageList.map(p => <button onClick={() => movePage(p)}>{p}</button>)}
            {data.next && <button onClick={() => movePage(data.end +1)}>NEXT</button>}
        </>
    )

}

export default TodoList;