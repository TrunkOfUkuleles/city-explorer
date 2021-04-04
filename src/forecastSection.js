import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import DailyCard from "./weatherDay";

class ForecastSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="forecast-box">
        {this.props.forc.map((el) => {
          return <DailyCard data={el} />;
        })}
      </div>
    );
  }
}

export default ForecastSection;
