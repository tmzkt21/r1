import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {login} from "./signInSlice";

const SinginButton = () => {

    const useObject = useSelector(state => state.signin)
    // 스토어 제이에스 = state.signin 이름 똑같이
    const disPatch = useDispatch()
    console.log(useObject)
    return (
        <div>
            <div>{useObject.name}</div>
            <button onClick={()=>{disPatch(login())}}>SINGIN</button>
        </div>
    );
};

export default SinginButton;