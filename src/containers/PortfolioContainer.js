import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  render() {
    const soldStock = this.props.sold.map(sold =>{
      return <Stock handleClick={this.props.sellStock} stock={sold}/>
    })
    return (
      <div>
        <h2>My Portfolio</h2>
          {
            soldStock
          }
      </div>
    );
  }

}

export default PortfolioContainer;
