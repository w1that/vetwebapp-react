import React from 'react'
import { useDispatch } from 'react-redux'
import { setDescription } from '../redux/petSlice'

function DiseaseDescription() {
    const dispatch = useDispatch()
    return (
        <textarea onChange={(e)=>dispatch(setDescription(e.target.value))} maxLength={500} type="text" className="diseaseDescription" placeholder="detaylı bilgi"></textarea>

    )
}

export default DiseaseDescription
