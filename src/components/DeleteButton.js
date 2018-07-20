import React from 'react'

function DeleteButton(props) {
    return (
        <button onClick={() => props.deleteStudent(props.id)}>Delete Button</button>
    )
}

export default DeleteButton