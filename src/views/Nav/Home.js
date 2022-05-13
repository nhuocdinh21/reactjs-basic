import React from "react";
import Color from "../HOC/Color";
import { withRouter } from "react-router";

class Home extends React.Component {
    componentDidMount() {
        setTimeout(() => {
            // redirect link
            // this.props.history.push('/todo');
        }, 3000)
    }

    // HOC: Higher order component
    render() {
        return (
            <div>
                Home
            </div>
        )
    }
}

// export default withRouter(Home);
export default Color(Home);