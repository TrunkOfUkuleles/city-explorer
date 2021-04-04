import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import "./App.css";

class MovieSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderer = (data) => {
    data.map((el) => {
      return (
        <Card className="movie-base">
          <Card.Text>
            Title: {el.title}
            Votes: {el.votes}
          </Card.Text>
        </Card>
      );
    });
  };

  render() {
    return (<>{this.props.show && 
    <renderer data={this.props.data} />}</>)
  }
}

export default MovieSection;
