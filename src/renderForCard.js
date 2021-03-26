
import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from 'react-bootstrap/CardGroup'

class renderForCard extends React.Component {


  render() {
    return (
      <>
        <CardGroup>
          {this.props.data.map((el) => {
            return (
              <Card>
                <Card.Body>
                  {" "}
                  Date: {this.props.date}
                  Description: {this.props.description}
                </Card.Body>
              </Card>
            );
          })}
        </CardGroup>
      </>
    );
  }
}
export default renderForCard;
