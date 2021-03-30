
import React from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form';
import Error from './error';
import './App.css';
import ForecastSection from './forecastSection';
import MovieSection from './movieSection';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button'

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
      movieResults: [],
      showMov: false,
    };
  }


     getLocation = async(e) => {
      e.preventDefault();
      const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_KEY}&q=${this.state.quer}&format=json`;
       await axios.get(url)
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
  
    getWeath = async(e) => {
      e.preventDefault();
      const url = `${process.env.REACT_APP_LOCAL_SERV}/weather`;
      const q = {params: {
        lat: this.state.loclat,
        lon: this.state.loclon,
    }}


     await axios.get(url, q)
      .then((forecasts) => {
        console.log('forecasts: ' , forecasts)
        const matcher = forecasts.data
        this.setState({ weather: matcher,
                        showForc: true})
      })
      .catch((error) => {
        <Error error={error.message} />
      })

    }

    getMov = async (e) => {
      e.preventDefault();
      const url = `${process.env.REACT_APP_LOCAL_SERV}/movie`;
      const q = { params:{
        query: this.state.quer
      }}

      await axios.get(url, q)
      .then((movies => {
        const movieRez = movies.data;
        this.setState({
          movieResults: movieRez[0],
          showMov:true
        })
        .catch((error) => {
          <Error error={error.message} />
        })
      }))
    }
  
      
  render() {

    return (
      <>



      <div className="title"><h1> Welcome To The Show</h1></div>

    <Accordion>
      <Card>

        <Card.Header>
        <Form className='top-box' onSubmit={this.getLocation}>
              <input onChange={(e) => this.setState({ quer: e.target.value })}
          placeholder="Enter your favorite city!" autoComplete='or town!' />
        <Accordion.Toggle as={Button} variant="submit" eventKey="0" onClick={this.getLocation}>
        V  V  V
      </Accordion.Toggle>
      </Form>
        </Card.Header>
    
    <Accordion.Collapse eventKey="0">
    
          {/* <LocationSection data={ {img: this.state.imgsrc, lat: this.state.loclat, lon:  this.state.loclon} } /> */}
          <Card.Body className="card-body">
              <Card.Img className="target-image" variant='top' src={this.state.imgsrc} alt="map"  />
              
              <Card.Text className="latlon">
                <p>lat: {this.state.loclat}</p> 
               <p> lon: {this.state.loclon}</p>
              </Card.Text>
            <Card.Footer className='button-space'>
            <button onClick={this.getWeath} >Get Some Forecasts</button>
            <button onClick={this.getMov} >Or maybe some movies?</button>
            </Card.Footer>
              </Card.Body>
      </Accordion.Collapse>
      </Card>
        </Accordion>
      {this.state.showForc&&
      <ForecastSection show={this.state.showForc} data={this.state.weather} />
      }
     
      {this.state.showMov&&
      <MovieSection show={this.state.showMov} data={this.state.movieResults} />
      }
 


  </> )
}
}
export default App 
