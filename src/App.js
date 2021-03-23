
import React from 'react';
import axios from 'axios';

import Form from 'react-bootstrap/Form';

 class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      location: {},
      quer: '',
      imgsrc: '',
      displayResults: false
    }
  }

 

  getTest = async(e) => {
    e.preventDefault();
    const url=`https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_KEY}&q=Seattle&format='json'`;
    const base = await axios.get(url);
    const one = base.data;
    console.log('one: ', {one})
    this.setState({
      location: one[0],
      pop: true,
      ll: [one[0].lat , one[0].lon],
      // imgsrc: `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_KEY}&center=${one[0].lat},${one[0].lon}&zoom=13`,
    });
    console.log(this.state.ll)
    console.log('state: ', this.state.one)

  }
  

  render() {
    console.log('state', this.state);
  return (    
   <>
   
          <h1 backgroundColor="red"> {this.state.location.display_name || 'TEMP'} </h1>
          <Form onSubmit={this.getTest}>
            <input onChange={(e) => this.setState({quer: e.target.value})} type="text" placeholder="Enter your favorite city!" />
          <button type="submit"> "Hello" </button>
          </Form>
      
        {this.state.displayResults  && 
        <>
          <p> lat: {this.state.ll[0]}, lon: {this.state.ll[1]} </p>
           {/* <img src={this.state.imgsrc} alt='blah' /> */}
        </>
      }  
      </>   
  )}
}

export default App;
