import React, {Component} from 'react';
import {
  Card, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle
} from 'react-bootstrap';
import Button from 'react-bootstrap/Button'

class DisplayList extends Component {

/*render DisplayList*/
  render() {
    return (
      <div>
      {this.props.items.map(itemId => {
        return (
          <div key={itemId.name} xs ={10} md = {10}>

            <img src={itemId.img} />

          {/*creating product cards that display filter categories, price, and a button that adds to/remove from your aggregator*/}
          <Card>
            <Card.Body>
              <Card.Title><h3>{itemId.name}</h3></Card.Title>
                <Card.Subtitle> ${itemId.price.toFixed(2)}</Card.Subtitle>
                <Card.Text> {itemId.size}, {itemId.type} </Card.Text>
                <Button onClick={()=> this.props.onAggregatorAdd(itemId)}>Add to Cart</Button>
                <Button onClick={()=> this.props.onAggregatorRemove(itemId)}>Remove from Cart</Button>
            </Card.Body>
          </Card>
            </div>
        )
      }) }
</div>
    );
  }
}

export default DisplayList;
