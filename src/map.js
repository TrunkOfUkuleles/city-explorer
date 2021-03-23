import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

 class Map extends React.Component {
  constructor(props){
    super(props);
    
  }

  render(){
      return (
          <>
          <p> lat: {this.state.ll[0]}, lon: {this.state.ll[1]} </p>
           <img src={this.state.imgsrc} alt='map' />
          
          
          
          </>
      )
  }
 }

 export default Map;