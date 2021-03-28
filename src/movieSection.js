

import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Card from 'react-bootstrap/Card'
import './App.css'



class MovieSection extends React.Component {

    
render() {
    return (
        <>
{this.props.show && 

    <Card className='movie-base'>

    <Card.Text>
      Title: {this.props.movieResults.title} || ''
      Votes: {this.props.movieResults.votes} || ''
    </Card.Text>

  </Card>
}
</>

    )
} 


}

export default MovieSection;