
import React from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from 'react-bootstrap/Card'

import Form from 'react-bootstrap/Form';
import Error from './error';
require('dotenv').config();

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
      loclat:'',
      loclon: '',
    };
  }

 



     getLocation = (e) => {
      e.preventDefault();
      const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_KEY}&q=${this.state.quer}&format=json`;
       axios.get(url)
      .then((local) => {
        const matches = local.data
        console.log(local, 'string')
      this.setState({ location: matches[0],  loclat: matches[0].lat , loclon: matches[0].lon, displayResults: true, 
        imgsrc: `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_KEY}&center=${matches[0].lat},${matches[0].lon}`
      
      })})
      .catch((error) => {

        <Error error={error.message} />;
      })
    }
  
    getWeath = (e) => {
      e.preventDefault();
      const url = process.env.REACT_APP_LOCAL_SERV;
      const q = {
        lat: this.state.loclat,
        lon: this.state.loclon,
    }


     axios.get(url, q)
      .then((forecasts) => {
        const matcher = forecasts.data
        this.setState({ weather: matcher,
                        showForc: true})
      })
      .catch((error) => {
        <Error error={error.message} />
      })

    }
  

  render() {

    return (
      <>
      <h1> Welcome</h1>

        <Form className='top-box' onSubmit={this.getLocation}>
          <input onChange={(e) => this.setState({ quer: e.target.value })}
            placeholder="Enter your favorite city!" />
          <button type="submit"> Explore! </button>
        </Form>
        
  
          <Card className='location-base'>
              <Card.Img variant='top' src={this.state.imgsrc} alt="map" rounded />
              <Card.Body>
          
              <Card.Text>
                lat: {this.state.loclat}, 
                lon: {this.state.loclon},
              </Card.Text>
              </Card.Body>
            </Card>
            <button onClick={this.getWeath}>Get Some Forecasts</button>
  </>
  )
}
}
export default App
