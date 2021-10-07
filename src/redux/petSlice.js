import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { PetService } from "../api/petService";

const petService = new PetService()

export const getPets = createAsyncThunk(
    "pet/getPets",
    async () => {
      const response = await petService.getAll();
      return response.data.data;
    }
  );

const petSlice = createSlice({
    name:"pet",
    initialState:{
        pet:{},
        genus:{},
        disease:"",
        description:"",
        age:0,
        pets:[]
    },
    reducers:{
        setPet: (state,action)=>{
            state.pet = action.payload
        },
        setGenus:(state,action)=>{
            state.genus = action.payload
        },
        setDisease:(state,action)=>{
            state.disease = action.payload
        },
        setDescription:(state,action)=>{
            state.description = action.payload
        },
        setAge:(state,action)=>{
            state.age = action.payload
        }
    },
    extraReducers:{
        [getPets.fulfilled]:(state,action)=>{
            state.pets=action.payload
        }
    }
})

export const {setPet, setGenus, setDisease, setDescription, setAge} = petSlice.actions
export default petSlice.reducer