import {createSlice} from "@reduxjs/toolkit";


const userState = {
    id:'',
    name:''
}

const signInSlice = createSlice({

    name: 'signIn',
    initialState:userState,
    reducers: {
        login:(state,action) => {
            console.log("login......")

            // userState.id='user00' --- readonly
            // userState.name = 'Hong gil Dong'
            return {id:'user00',name:'Hong gil Dong'}

        }
    }
    //리듀서 키와 값
    // 리턴을 해야한다 대신에 콘솔 리턴없고 객체..아닌상태
    // 로그인버튼을 누르면 사용자정보를 넣을 예정 이제 버튼을 만들자
    // 리덕스툴킷을 쓰면 불변이된다.. 바뀔수없다 userState.id='user00' 이럼안되..
    // 리턴하자 return {id:'user00',name:'Hong gil Dong'}
})
export const {login} =signInSlice.actions
//로그인을 외부에 노출
export default signInSlice.reducer