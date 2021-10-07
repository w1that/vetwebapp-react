import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { OwnerService } from "../api/ownerService";

const ownerService = new OwnerService()

export const getOwners = createAsyncThunk(
    "owner/getOwners",
    async () => {
      const response = await ownerService.getAll();
      return response.data.data;
    }
  );

const userSlice = createSlice({
    name:"user",
    initialState:{
        // currentUser:{username:"username", password:"password", firstName:"firstname", lastName:"lastName"}
        currentUser:JSON.parse(localStorage.getItem("currentUser")),
        // currentUser:{},
        owners:[]
    },
    reducers:{
        setCurrentUser :(state,action)=>{
            state.currentUser = action.payload;
        }
    },
    extraReducers:{
        [getOwners.fulfilled]:(state,action)=>{
            state.owners = action.payload
        }
    }
})

export const {setCurrentUser} = userSlice.actions
export default userSlice.reducer