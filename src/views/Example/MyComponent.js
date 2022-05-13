import React from 'react';
import ChildComponent from './ChildComponent';
import AddComponents from './AddComponents';
import { toast } from 'react-toastify';

class MyComponent extends React.Component {

    state = {
        arrJobs: [
            { id: 'Job1', title: 'Developer', salary: '500' },
            { id: 'Job2', title: 'Tester', salary: '400' },
            { id: 'Job3', title: 'Project Manager', salary: '1000' }
        ]
    }

    addNewJob = (job) => {
        console.log(`Check job:`, job)
        this.setState({
            arrJobs: [...this.state.arrJobs, job]
        })

        // let currentJobs = this.state.arrJobs;
        // currentJobs.push(job);
        // this.setState({
        //     arrJobs: currentJobs
        // })
    }

    deleteOneJob = (job) => {
        let currentJobs = this.state.arrJobs;
        currentJobs = currentJobs.filter(item => item.id !== job.id);
        this.setState({
            arrJobs: currentJobs
        })
        toast.success('Delete success!');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(`>>> Run Component Did Update: `, ' Prev State', prevState, ' Current State', this.state);
    }

    componentDidMount() {
        console.log(`>>> Run Component Did Mount`);
    }

    render() {
        console.log(`>> Call render: `, this.state);
        return (
            <>
                <AddComponents addNewJob={this.addNewJob} />
                <ChildComponent arrJobs={this.state.arrJobs} deleteOneJob={this.deleteOneJob} />
            </>
        )
    }
}

/*
* Export default when return only 1 function
* When export multiple use: export {} MyComponent
*/
export default MyComponent;