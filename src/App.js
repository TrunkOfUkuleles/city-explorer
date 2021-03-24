import React from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
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
    };
  }

  // getLocal = async (e) => {
  //   try{
  //     e.preventDefault();
  //     const SERVER = 'http://localhost:3001/forecast';
  //     const weather = await axios.get(`${SERVER}`);
  //     const newArr = weather.data
  //     this.setState({
  //     forc: newArr.reduce((acc, curr) => {
  //       let result = [...acc, { date: curr.datetime,
  //                               description: curr.weather.description,
  //                               temp: curr.temp }]
  //     return result}, [] )
  //     })

  //   }catch(error){
  //       console.error(error)
  //   }
  // }

  componentDidMount = async() => {
    const SERVER = process.env.REACT_APP_LOCAL_KEY;
    await axios.get(`${SERVER}`)
      .then((result) => {
        this.setState({
          forc: result.data,
          showForc: true,
        });
        console.log(this.state)
      })
      .catch((error) => {
        {
          console.log("mounting issue ", error);
        }
        <Error error={error.message} />;
      });
  };

  // getFore = async (e) => {
  //   try{

  //     const url = process.env.REACT_APP_LOCAL_KEY
  //     const location = await axios.get(url);
  //     const locationArray = await location.data;

  //     this.setState({
  //       forc: [...resu],
  //       showForc: true,
  //     }

  // );

  //   } catch(error) {

  //     {console.log(error)}
  //         <Error error={error.message} />

  //   }

  // }

  getTest = async (e) => {
    e.preventDefault();
    try {
      const url = `https://us1.locationiq.com/v1/search.php?q=${this.state.quer}&format=json&key=${process.env.REACT_APP_LOCATION_KEY}`;
      const location = await axios.get(url);
      const locationArray = await location.data;

      this.setState({
        location: locationArray[0],
        displayResults: true,
        imgsrc: `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_KEY}&center=${locationArray[0].lat},${locationArray[0].lon}&zoom=13`,
      });
    } catch (error) {
      {
        console.log(error);
      }
      <Error error={error.message} />;
    }
  };

  render() {
    return (
      <div>
        <Form>
          <div onSubmit={this.getTest}>
            {this.state.location.display_name || "TEMP"}{" "}
          </div>
          <input
            onChange={(e) => this.setState({ quer: e.target.value })}
            placeholder="Enter your favorite city!"
          />
          <Button type="submit"> Explore! </Button>
        </Form>

        <Card>
             {
         this.state.showForc ?
           <ul>
            <Forecast data={this.state.forc} />
          </ul> 
          :
       <p> forcast? (this.state)</p>}
       </Card>

        {this.state.displayResults ? (
          <Card>
            <Card.Text>
              {" "}
              lat: {this.state.location.lat}, lon: {this.state.location.lon}{" "}
            </Card.Text>
            <Image src={this.state.imgsrc} alt="map" rounded />
          </Card>
        ) : (
          <></>
        )}
      </div>
    );
  }
}

export default App;
