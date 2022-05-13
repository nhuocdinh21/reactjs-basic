import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import './style.scss'

class ListUser extends React.Component {

    // componentDidMount() {
    //     axios.get('https://reqres.in/api/users?page=1')
    //         .then(res => {
    //             console.log(`>>> Check res: `, res.data.data);
    //         })
    // }

    state = {
        listUsers: []
    }

    async componentDidMount() {
        let res = await axios.get('https://reqres.in/api/users?page=1');
        this.setState({
            listUsers: res && res.data && res.data.data ? res.data.data : []
        })
    }

    handleViewDetailUser = (user) => {
        this.props.history.push(`/user/${user.id}`)
    }

    render() {
        let { listUsers } = this.state;
        return (
            <div className="list_user_container">
                <div className="title">
                    Fetch all list user
                </div>
                <div className="list_user_content">
                    {
                        listUsers && listUsers.length > 0 &&
                        listUsers.map((item, index) => {
                            return (
                                <div className="child" key={item.id} onClick={() => this.handleViewDetailUser(item)}>
                                    {index + 1} - {item.first_name} {item.last_name}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default withRouter(ListUser);