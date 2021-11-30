import React from 'react'

class TodoForm extends React.Component {
    constructor() {
        super()
        this.state = {
            input: ''
        }
    }

    handleChange = event => {
        this.setState({
            ...this.state,
            input: event.target.value
        })
    }

    render() {
        return (
            <form>
                <input type='text' name='item' />
                <button>Add</button>
            </form>
        )
    }
}

export default TodoForm