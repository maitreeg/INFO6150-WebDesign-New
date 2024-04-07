import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    userDetails: {},
    userRole: ''
};

const LoginSlice = createSlice({
    name:"login",
    initialState,
    reducers:{
        addUser:(state, action)=>{
            state.userDetails = action.payload;
        }
    }
});

export const {addUser} = LoginSlice.actions;
export default LoginSlice.reducer;
