import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const loginUser = createAsyncThunk(
    'user/loginUser',
    async(formData)=>{
        const request = await axios.post("http://localhost:5000/api/auth/login",formData);
        console.log("req",request)
        const response = await request.data;
        console.log("res",response)
        localStorage.setItem('zephyruser', JSON.stringify(response));
        return response;
    }
);

const userSlice = createSlice({
    name: "user",
    initialState:{
        loading:false,
        user:null,
        error:null
    },
    extraReducers:(builder)=>{
        builder
            .addCase(loginUser.pending,(state)=>{
                state.loading=true;
                state.user=null;
                state.error=null;
            })
            .addCase(loginUser.fulfilled,(state,action)=>{
                state.loading=false;
                console.log(action.payload)
                state.user=action.payload;
                state.error=null;
            })
            .addCase(loginUser.rejected,(state,action)=>{
                state.loading=false;
                state.user=null;
                console.log(action.error.message);
                if(action.error.message === 'Request failed with status code 404'){
                    state.error='Access denied! Invalid credentials';
                }
                else{
                    state.error= action.error.message;
                }
            })
    }
})
export default userSlice.reducer;