import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
    name:'login',
    initialState:{
        email:""
    },
    reducers:{
        login:(state,action) => {
            state.email = action.payload
            console.log(state.email);
        }
    }
})
export default loginSlice.reducer;
export const {login} = loginSlice.actions