import React, {useState} from 'react';

const InputEx = ({str}) => {

    const [title, setTitle] = useState(str)

    const changeTitle = (e) => {
        e.stopPropagation()
        setTitle(e.target.value)
        // 키보드를 입력
    }
    const clearTitle = (e) => {
        setTitle("")
    }

    return (
        <div>
            <input type={"text"} name={'title'} value={title} onChange={changeTitle}/>
            <button onClick={clearTitle}>clear</button>
        </div>
    );
};

export default InputEx;