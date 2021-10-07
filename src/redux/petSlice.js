import { createSlice } from "@reduxjs/toolkit";

const petSlice = createSlice({
    name:"pet",
    initialState:{
        pet:{},
        genus:{},
        disease:"",
        description:"",
        age:0,


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
    }
})

export const {setPet, setGenus, setDisease, setDescription, setAge} = petSlice.actions
export default petSlice.reducer