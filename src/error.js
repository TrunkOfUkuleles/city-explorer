import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


 class Error extends React.Component {
  constructor(props){
    super(props);
    
  }

  render(){
      return (
         <h1> error bro : {this.props.error}</h1>
      )
  }
 }

 export default Error;