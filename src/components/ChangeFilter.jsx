import React from 'react'

function ChangeFilter(props) {
    return (
        <button onClick={() => props.setFilter(props.mood)}>
            {props.mood}
        </button>
    )
}

export default ChangeFilter