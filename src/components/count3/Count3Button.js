import React from 'react';
import {useDispatch} from "react-redux";
import {dec, inc} from "./countSlice";


// 카운트 버튼에서클릭하면 디스패치
const Count3Button = () => {

    const dispatch = useDispatch()
    // 디스패치추가
    return (
        <div>
            <button onClick={()=>{dispatch( inc()) }}> ++ </button>
            <button onClick={()=>{dispatch( dec()) }}> -- </button>
        </div>
    );
};

export default Count3Button;