'use strict';

import React from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Forecast from "./forecast.js";
import Error from "./error.js";
import getWeather from './getWeather'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: {},
      quer: "",
      imgsrc: "",
      displayResults: false,
      errorMess: {},
      showError: false,
      forc: [],
      showForc: false,
      weather:{},
      latlon: {},
      showMyForc: false,
    };
  }

  renderForcasts = () => {
    await axios.get(process.env.REACT_APP_LOCAL_KEY2, {params: this.state.latlon})
      .then((rees) => {this.setState({
        weather: rees.data,
        showMyForc: true,
        showForc: false,
      })})
      .catch((error) => {
      <Error error={error.message} />;
      })
    }
  

  render() {
    return (
      <>
      {<h1>{this.state.location.display_name} || "Welcome"</h1>}

        <Form class='top-box' onSubmit={getWeather}>
          <input
            onChange={(e) => this.setState({ quer: e.target.value })}
            placeholder="Enter your favorite city!"
          />
          <Button type="submit"> Explore! </Button>
        </Form>

  {       this.state.displayResults &&  
  <>
          <Card class='location-base'>
            <Card.Img variant='top' src={this.state.imgsrc} alt="map" rounded />
            <Card.Body>
            <Card.Title>{this.state.location.display_name}</Card.Title>
            <Card.Text>
              lat: {this.state.location.lat}, 
              lon: {this.state.location.lon},
              weather: {this.state.weather}
            </Card.Text>
            </Card.Body>
          </Card>
          
        {this.state.showMyForc &&
         <Button onClick={this.foreRend}>Forcast</Button>}
         </>
         }
        {
         this.state.showForc ?
           <Card>
            <Forecast data={this.state.forc} />
          </Card> 
          :
          <Button onClick={this.toggleForc}>See some Forecasts</Button>
  }
    </>
    );
  }
}

export default App;
