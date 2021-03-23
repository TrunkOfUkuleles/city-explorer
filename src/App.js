import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// import Alert from 'react-bootstrap/Alert'
              
 class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      location: {},
      quer: '',
      imgsrc: '',
      displayResults: false,
      ll: [],
      showError: false,
    }
  }
  testme = (e) => {
    e.preventDefault();
    const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_KEY}&q=${this.state.quer}&format=json`;
    axios.get(url, {params:{key: process.env.REACT_APP_LOCATION_KEY}})
      
    // const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_KEY}&q=${this.state.quer}&format=json`;
    // location = await axios.get(url);
    // second = location.data;
    // this.setState({message: location})
    // console.log(second)
    
  }
  
  
  getTest = async (e) => {
    e.preventDefault();
    const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_KEY}&q=${this.state.quer}&format=json`;
    const location = await axios.get(url);
    const locationArray = location.data;
    this.setState({
      location: locationArray[0],
      displayResults: true,
      ll: [locationArray[0].lat , locationArray[0].lon],
      imgsrc: `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_KEY}&center=${locationArray[0].lat},${locationArray[0].lon}&zoom=13`,

    });

    try{

    }catch(error){
      console.error(error)
      this.setState({showError: true})
    }


    

  }
  

  render() {
    console.log('state', this.state);
  return (    
   <>
    {/* <Alert variant="danger" onClose={() => setShow(false)} dismissible></Alert> */}
   
          <h1> {this.state.location.display_name || "TEMP"} </h1>
          <Form onSubmit={this.testme}>
            <input onChange={(e) => this.setState({quer: e.target.value})} placeholder="Enter your favorite city!" />
          <Button type="submit"> Hello </Button>
          </Form>
      
        {this.state.displayResults  && 
        <>
          <p> lat: {this.state.ll[0]}, lon: {this.state.ll[1]} </p>
           <img src={this.state.imgsrc} alt='map' />
        </>
      }

      {this.state.showError &&
        <error />
      }  
      </>   
  )}
}

export default App;
