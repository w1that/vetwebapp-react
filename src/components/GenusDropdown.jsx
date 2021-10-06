import React, { useState } from 'react'

function GenusDropdown() {

    const [dropdown, setDropdown] = useState(false)


    return (
        <div className="genusDropdown">
            <button className="genusButton" onClick={()=>setDropdown(!dropdown)}>genus</button>
            {dropdown&&
                <div className="genusDropdownMenu">
                    <div className="genusItem">item</div>
                    <div className="genusItem">item</div>
                    <div className="genusItem">item</div>
                    <div className="genusItem">item</div>
                    <div className="genusItem">item</div>
                    <div className="genusItem">item</div>
                </div>
            }
        </div>
    )
}

export default GenusDropdown
