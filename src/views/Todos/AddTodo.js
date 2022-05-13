import React from "react";
import { toast } from 'react-toastify';

class AddTodo extends React.Component {

    state = {
        title: ''
    }

    handleOnChangeTitle = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    handleClickAddTodo = () => {
        if (!this.state.title) {
            toast.error(`Missing title's Todo!`);
            return;
        }
        let todo = {
            id: Math.floor(Math.random() * 10000),
            title: this.state.title
        }

        this.props.addNewTodo(todo);

        this.setState({
            title: ''
        })
    }

    render() {
        let { title } = this.state;
        return (
            <>
                <div className="add_todo">
                    <input type="text" value={title} onChange={(event) => this.handleOnChangeTitle(event)} />
                    <button type="button" onClick={() => this.handleClickAddTodo()}>Add</button>
                </div>
            </>
        )
    }
}

export default AddTodo