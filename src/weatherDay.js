


import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Card from 'react-bootstrap/Card'
import './App.css'



class DailyCard extends React.Component {

    constructor(props){
        super(props);
        this.state={
        }
    }

            
            
    
render(){  
    return (
            <Card className="forecast-base">
            <Card.Text >
              Forecast: {this.props.forecast}
              Date: {this.props.time}
            </Card.Text>
          </Card>
    )
} 

}


export default DailyCard;