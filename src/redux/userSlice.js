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
        currentUser:{},
        owners:[],
        selectedUserType:(0)
    },
    reducers:{
        setCurrentUser :(state,action)=>{
            state.currentUser = action.payload;
        },
        setSelectedUserType:(state,action)=>{
            state.selectedUserType = action.payload
        }
    },
    extraReducers:{
        [getOwners.fulfilled]:(state,action)=>{
            state.owners = action.payload
        }
    }
})

export const {setCurrentUser, setSelectedUserType} = userSlice.actions
export default userSlice.reducer