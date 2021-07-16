// 서비스 최종..


import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

// 1.썽크 개발 액시오스
export const asyncGetTime = createAsyncThunk('async/asyncTimeService', async  () => {
    const res = await axios.get("http://localhost:8080/todo/now")
    console.log("썽크!!")
    const data = res.data

    return data
})