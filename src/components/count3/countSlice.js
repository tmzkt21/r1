const {createSlice} = require("@reduxjs/toolkit");

const  initState = {count:0}
const countSlice = createSlice({
    name:"count",
    //이름
    initialState: initState,
    //초기상태
    reducers: {
        inc:(state, action) => {
            console.log("inc",action)
            return {count: state.count +1}
            // state 카운트 +1
        },
        dec: (state, action) => {
            console.log("dec",action)
            return {count: state.count -1}
            // state 카운트 -1
        }
    }
})

export const {inc,dec} = countSlice.actions
// 이로 인해 디스패치를 호출
export default countSlice.reducer
//리듀서를 반환..