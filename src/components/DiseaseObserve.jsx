import React from 'react'
import { useDispatch } from 'react-redux'
import { setDisease } from '../redux/petSlice'

function DiseaseObserve() {
    const dispatch = useDispatch()
    return (
            <textarea onChange={(e)=>dispatch(setDisease(e.target.value))} maxLength={100} type="text" className="diseaseObserve" placeholder="gözlenen rahatsızlık"></textarea>
       
    )
}

export default DiseaseObserve
