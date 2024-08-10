import React from "react";

class MovieDetail extends React.Component {
    componentDidMount() {
        const { location, history } = this.props;

        // if no movie is selected, cannot see details -> redirect to home
        if (location.state == undefined) {
            history.push("/");
        }
    }

    render() {
        const { location } = this.props;
        if (location.state) {
            return <h1>{location.state.title}</h1>;
        } else {
            return null
        }
    }
}

export default MovieDetail;