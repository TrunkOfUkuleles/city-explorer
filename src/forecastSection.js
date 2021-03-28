


import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Card from 'react-bootstrap/Card'
import './App.css'



class ForecastSection extends React.Component {

    constructor(props){
        super(props);
        this.state={
            forc: this.props.data
        }
    }

    
render() {
    return (
        <>
{this.props.show &&

<Card className="forecast-base">
            <Card.Text>
              Forecast: {this.state.forc.forecast} || ''
              Date: {this.state.forc.time} || ''
            </Card.Text>
          </Card>

}
</>
    )
} 


}

export default ForecastSection;