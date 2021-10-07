import React from 'react'

function PublishPost({addPetHandler}) {
    return (
        <button onClick={addPetHandler} className="publishPostButton">Yayınla</button>
    )
}

export default PublishPost
