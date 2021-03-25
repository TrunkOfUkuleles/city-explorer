import React from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Forecast from "./forecast.js";
import Error from "./error.js";

// import Alert from 'react-bootstrap/Alert'

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



  toggleForc = () => {
    this.setState({showForc: !this.state.showForc})
  }

  componentDidMount = async() => {
    const SERVER = process.env.REACT_APP_LOCAL_KEY;
    await axios.get(`${SERVER}`)
      .then((result) => {
        this.setState({
          forc: result.data,
        });
        console.log(this.state)
      })
      .catch((error) => {
       
        <Error error={error.message} />;
      });
  };

  foreRend = async(e) => {
    e.preventDefault();
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

  getTest = async (e) => {
    
    try {
      e.preventDefault();
      const url = `https://us1.locationiq.com/v1/search.php?q=${this.state.quer}&format=json&key=${process.env.REACT_APP_LOCATION_KEY}`;
      const location = await axios.get(url);
      const locationArray = await location.data;

      this.setState({
        location: locationArray[0],
        displayResults: true,
        imgsrc: `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_KEY}&center=${locationArray[0].lat},${locationArray[0].lon}&zoom=13`,
        
      });


    } catch (error) {
    
      <Error error={error.message} />;
    }
  };

  render() {
    return (
      <>
        <Form>
          <div onSubmit={this.getTest}>
            {this.state.location.display_name || "TEMP"}
          </div>
          <input
            onChange={(e) => this.setState({ quer: e.target.value })}
            placeholder="Enter your favorite city!"
          />
          <Button type="submit"> Explore! </Button>
          
        </Form>

  {       this.state.displayResults &&  
  <>
          <Card>
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
