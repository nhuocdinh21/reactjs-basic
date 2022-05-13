import React from "react";
import Color from "../HOC/Color";
import { withRouter } from "react-router";
import logo from '../../assets/images/logo.png';
import { connect } from 'react-redux';

class Home extends React.Component {
    componentDidMount() {
        setTimeout(() => {
            // redirect link
            // this.props.history.push('/todo');
        }, 3000)
    }

    // HOC: Higher order component

    handleDeleteUser = (user) => {
        console.log(`Check user delete:`, user);
        this.props.deleteUserRedux(user);
    }

    handleCreateUser = () => {
        this.props.addUserRedux();
    }

    render() {
        console.log(`Check props: `, this.props.dataRedux)
        let listUser = this.props.dataRedux;
        return (
            <>
                <div>
                    Home
                </div>
                <div>
                    <img src={logo} />
                </div>
                <div>
                    {
                        listUser && listUser.length > 0 &&
                        listUser.map((item, index) => {
                            return (
                                <div key={item.id}>
                                    {index + 1} - {item.name}
                                    &nbsp; <span onClick={() => this.handleDeleteUser(item)}>x</span>
                                </div>
                            )
                        })
                    }
                    <button type="button" onClick={() => this.handleCreateUser()}>Add new</button>
                </div>
            </>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        dataRedux: state.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteUserRedux: (userDelete) => dispatch({ type: 'DELETE_USER', payload: userDelete }),
        addUserRedux: () => dispatch({ type: 'CREATE_USER' }),
    }
}
// export default withRouter(Home);
export default connect(mapStateToProps, mapDispatchToProps)(Color(Home));