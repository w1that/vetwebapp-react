import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"user",
    initialState:{
        currentUser:{}
    },
    reducers:{
        setCurrentUser :(state,action)=>{
            state.currentUser = action.payload;
        }
    },
    extraReducers:{

    }
})

export const {setCurrentUser} = userSlice.actions
export default userSlice.reducer