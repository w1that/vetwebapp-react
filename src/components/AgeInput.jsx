import React from 'react'
import { useDispatch } from 'react-redux'
import { setAge } from '../redux/petSlice'

function AgeInput() {
    const dispatch = useDispatch()
    return (
            <input onChange={(e)=>dispatch(setAge(e.target.value))} type="number" min={0} max={20} className="ageInput" placeholder="yaş"></input>
       
    )
}

export default AgeInput
