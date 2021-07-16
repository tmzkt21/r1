import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {asyncGetTime} from "./asyncTimeService";

const AsyncTime = () => {

    // 호출은 그냥 디스패치

    const msg = useSelector(state => state.async.msg)
    const dispatch = useDispatch()

    useEffect(()=>{
        // 디스패치에는 액션!
        dispatch(asyncGetTime())

    },[])


    return (
        <div>
            <h1>AsTime{msg}</h1>
        </div>
    );
};

export default AsyncTime;