import {configureStore} from "@reduxjs/toolkit";
import countSlice from "../components/count3/countSlice";
import signInSlice from "../components/signIn/signInSlice";

export const store = configureStore({

    reducer: {
        count: countSlice,
        signin:signInSlice
    }

    //스토어 안에 카운트를 쓰면
    //셀렉트를 얻어올때 카운트 슬라이스에서얻어오고싶다면
    //state.count
})