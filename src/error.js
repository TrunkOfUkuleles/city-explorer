import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Alert from 'react-bootstrap/Alert'


 class Error extends React.Component {


  render(){
      return (
         <Alert variant="danger"> error bro : {this.props.error}</Alert>
      )
  }
 }

 export default Error;