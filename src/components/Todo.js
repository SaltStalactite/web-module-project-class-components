import React from 'react'

const Todo = props => {

    const handleClick = () => {
        props.handleToggleTodo(props.todo)
    }

    return (
        <div>
            <p></p>
        </div>
    )
}

export default Todo