import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Forecast from './forecast.js'
// import Alert from 'react-bootstrap/Alert'
              
 class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      location: {},
      quer: '',
      imgsrc: '',
      displayResults: false,
      errorMess: {},
      showError: false,
      forc: [],
    }
  }

  getLocal = async (e) => {
    try{
      e.preventDefault();
      const SERVER = 'http://localhost:3001/forecast';
      const weather = await axios.get(`${SERVER}`);
      const newArr = weather.data
      this.setState({
        location: newArr[0],
      displayResults: true,
      forc: newArr.reduce((acc, curr) => {
        let result = [...acc, { date: curr.date,
                                description: curr.weather.description,
                                temp: curr.temp}]
      return result}, [] )
      })
      // const IMAGE = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_KEY}&center=${locationArray[0].lat},${locationArray[0].lon}&zoom=13`

    }catch(error){
        console.error(error)
    }
  }
  
  getTest = async (e) => {

    try{
    e.preventDefault();
    const url = `https://us1.locationiq.com/v1/search.php?q=${this.state.quer}&format=json&key=${process.env.REACT_APP_LOCATION_KEY}`;
    const location = await axios.get(url);
    const locationArray = location.data;
 
    this.setState({
      location: locationArray[0],
      displayResults: true,
      imgsrc: `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_KEY}&center=${locationArray[0].lat},${locationArray[0].lon}&zoom=13`,
      forc: locationArray.reduce((acc, curr) => {
        let result = [...acc, { date: curr.date,
                                description: curr.weather.description,
                                temp: curr.temp}]
      return result}, [] )
    }

    );

  } catch(error) {
    console.error(error)

  }

  }
  

  render(){

  return (    
   <>
   
          <h1> {this.state.location.display_name || "TEMP"} </h1>
          <Form onSubmit={this.getLocal}>
            <input onChange={(e) => this.setState({quer: e.target.value})} placeholder="Enter your favorite city!" />
          <Button type="submit"> Hello </Button>
          </Form>
       
       
        {this.state.displayResults  ? 
        <>
          <p> lat: {this.state.location.lat}, lon: {this.state.location.lon} </p>
           <img src={this.state.imgsrc} alt='map' />
        <Forecast data={this.state.forc} />

        </>
        :
        <></>
      }
      </>   
  )
}
 }

export default App;
