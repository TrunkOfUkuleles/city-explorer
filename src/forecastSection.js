


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

    renderer = (datas) => {
         datas.map(el=>{
            return ( 
            <Card className="forecast-base">
            <Card.Text >
              Forecast: {el.forecast}
              Date: {el.time}
            </Card.Text>
          </Card>
                
                
            )})}
               
    
 

    
render(){
    return (
        <>
{this.props.show &&

<renderer data={this.state.forc}/>

}
</>
    )
} 

}


export default ForecastSection;