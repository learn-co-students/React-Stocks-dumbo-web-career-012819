import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

        purchasedStocks = () => {
            return this.props.purchased.map(stock => {
                return <Stock handleClick={this.props.handleSellStock} key={stock.id} stock={stock}/>
            })
        }

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {
            this.purchasedStocks()
          }
      </div>
    );
  }

}

export default PortfolioContainer;
