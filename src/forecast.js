import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// import Alert from 'react-bootstrap/Alert'
           

 class Forecast extends React.Component {
  constructor(props){
    super(props);
    this.state={
      location: [],
    }
  }

  //  componentDidMount= async ()=> {
  //      const SERVER = 'http://localhost:3001';
  //      const weather = await axios.get(`${SERVER}`);

    
  //       const url = `https://us1.locationiq.com/v1/search.php?format=json&key=${process.env.REACT_APP_LOCATION_KEY}`;
  //       console.log(url)
  //       const location = await axios.get(url);
  //       const locationArray = location.data;
     
  //       this.setState({
  //         location: locationArray[0],
  //         displayResults: true,
  //         imgsrc: `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_KEY}&center=${locationArray[0].lat},${locationArray[0].lon}&zoom=13`,
    
  //       });
    
  //     }
      

       
 
   
   rerenderer = (arrs) => {
     try{
    arrs.map((el) => {
      <>
      <li>Date: {el.date}</li>
      <li>Description: {el.description}</li>
      <li>Temp: {el.temp}</li>
      </>
    })
    return
  }catch(error){
      console.alert(error)
    }
  

  render(){

  return (    
   <>
   {
        <ul>
      {this.rerenderer(this.props.data)}                        
        </ul>
   }
        
      </>   
  )
}
   }

export default Forecast;
