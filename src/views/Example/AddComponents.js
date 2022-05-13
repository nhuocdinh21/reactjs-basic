import React from "react";
import { toast } from 'react-toastify';

class AddComponents extends React.Component {

    state = {
        title: '',
        salary: '',
    }

    handleChangeTitleJob = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    handleChangeSalary = (event) => {
        this.setState({
            salary: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (!this.state.title || !this.state.salary) {
            toast.error('Missing required params');
            return;
        }
        this.props.addNewJob({
            id: Math.floor(Math.random() * 1001),
            title: this.state.title,
            salary: this.state.salary
        });

        this.setState({
            title: '',
            salary: ''
        })
    }

    render() {
        return (
            <>
                <form>
                    <label htmlFor='fname'>Job Title:</label><br />
                    <input type="text" value={this.state['title']} onChange={(event) => this.handleChangeTitleJob(event)} /><br />
                    <label htmlFor='lname'>Salary:</label><br />
                    <input type="text" value={this.state['salary']} onChange={(event) => this.handleChangeSalary(event)} /><br /><br />
                    <input type="submit" onClick={(event) => this.handleSubmit(event)} />
                </form>
            </>
        )
    }
}

export default AddComponents;