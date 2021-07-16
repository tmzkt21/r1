//2. 슬라이스 개발

import {createSlice} from "@reduxjs/toolkit";
import {asyncGetTime} from "./asyncTimeService";

const initState = {
    msg:''
}

const asyncSlice = createSlice({
    name:'asyncSlice',
    // 이름지정 큰의미는없다
    initialState:initState,
    // initState 를 슬라이스에 initialState 할당

    extraReducers:builder => {
        builder
            .addCase(asyncGetTime.pending, (state, action) => {
                console.log("펜딩!")
            return {msg:"loading....."}
                // asyncGetTime.pending = 데이터를 비동기로 가져오는 중에 뭘할거냐 ?
                // ajax 로 데이터를 가져오는중에... msg:"loading....." 띄워라!
        })
            .addCase(asyncGetTime.fulfilled, (state, action) => {
                console.log("풀필드!")
                return{msg:"Finished...."}
                //asyncGetTime.fulfilled - 데이터를 다가져오면 뭘할거냐?
                // msg:"Finished...." 끝났어...
            })

        //  .addCase = 리듀서를 상황에 맞게 여러개로 등록
    }
})


export default asyncSlice.reducer


// 슬라이스는 상태를유지

// 슬라이스 기본코드
// 한후 스토어에추가
// import {createSlice} from "@reduxjs/toolkit";
//
// const asyncSlice = createSlice({
//
// })
//
//
// export default asyncSlice.reducer