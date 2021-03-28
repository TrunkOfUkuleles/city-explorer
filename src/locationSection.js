


import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Card from 'react-bootstrap/Card'
import './App.css'



class LocationSection extends React.Component {

   constructor(props){
       super(props);
       this.state={
         srcImg: this.props.img,
         lattude: this.props.lat,
         lontude: this.props.lon,
       }
   }

   componentDidMount(){
       this.setState({srcImg: this.props.img,
        lattude: this.props.lat,
        lontude: this.props.lon,})
   }


render() {
    return (
        <>

<Card.Body>
              <Card.Img className="target-image" variant='top' src={this.state.srcImg} alt="map"  />
              
              <Card.Text>
                lat: {this.state.lattude}, 
                lon: {this.state.lontude},
              </Card.Text>
            <Card.Footer className='button-space'>
            <button onClick={this.getWeath} >Get Some Forecasts</button>
            <button onClick={this.getMov} >Or maybe some movies?</button>
            </Card.Footer>
              </Card.Body>

</>
    )
} 


}

export default LocationSection;