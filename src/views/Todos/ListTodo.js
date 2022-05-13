import React from "react";
import './demo.scss';
import AddTodo from "./AddTodo";
import { toast } from 'react-toastify';

class ListTodo extends React.Component {

    state = {
        listTodos: [
            { id: 'todo1', title: 'Doing Homework' },
            { id: 'todo2', title: 'Making Video' },
            { id: 'todo3', title: 'Fixing Bugs' },
        ],
        editTodo: {}
    }

    addNewTodo = (todo) => {
        this.setState({
            listTodos: [...this.state.listTodos, todo]
        })

        toast.success('Wow so easy');
    }

    handleDeleteTodo = (todo) => {
        let currentTodo = this.state.listTodos;
        currentTodo = currentTodo.filter(item => item.id !== todo.id);
        this.setState({
            listTodos: currentTodo
        })

        toast.success('Delete success!');
    }

    handleEditTodo = (todo) => {
        let { listTodos, editTodo } = this.state;

        let isEmptyObj = Object.keys(editTodo).length === 0;
        // save
        if (isEmptyObj === false && editTodo.id === todo.id) {
            let listTodoCopy = [...listTodos];
            let objIndex = listTodoCopy.findIndex((item => item.id === todo.id));
            listTodoCopy[objIndex].title = editTodo.title;
            this.setState({
                listTodos: listTodoCopy,
                editTodo: {}
            })
            toast.success('Update Todo success!');
            return;
        }
        // edit
        this.setState({
            editTodo: todo
        })

    }

    handleOnchangeEditTodo = (event) => {
        let editTodoCopy = { ...this.state.editTodo };
        editTodoCopy.title = event.target.value;
        this.setState({
            editTodo: editTodoCopy
        })
    }

    render() {
        let { listTodos, editTodo } = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0;
        // console.log(`Check Empty Object`, isEmptyObj);
        return (
            <>
                <div>Simple Todo Apps with React.js</div>
                <div className="list_todo_container">
                    <AddTodo addNewTodo={this.addNewTodo} />
                    <div className="list_todo_content">
                        {listTodos && listTodos.length > 0 &&
                            listTodos.map((item, index) => {
                                return (
                                    <div className="todo_child" key={item.id}>
                                        {
                                            isEmptyObj === true ?
                                                <span>{index + 1} - {item.title}</span>
                                                :
                                                <>
                                                    {
                                                        editTodo.id === item.id ?
                                                            <span>
                                                                {index + 1} - <input value={editTodo.title} onChange={(event) => this.handleOnchangeEditTodo(event)} />
                                                            </span>
                                                            :
                                                            <span>{index + 1} - {item.title}</span>
                                                    }
                                                </>
                                        }
                                        <button className="edit button" onClick={() => this.handleEditTodo(item)}>
                                            {
                                                isEmptyObj === false && editTodo.id === item.id ? 'Save' : 'Edit'
                                            }
                                        </button>
                                        <button className="delete button" onClick={() => this.handleDeleteTodo(item)}>Delete</button>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </>
        )
    }
}

export default ListTodo;