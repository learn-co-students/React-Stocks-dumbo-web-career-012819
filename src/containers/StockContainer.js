import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

    stockCards = () => {
        return this.props.stocks.map(stock => {
            return <Stock handleClick={this.props.handleBuyStock}key={stock.id} stock={stock}/>
        })
    }

  render() {
    return (
      <div>
        <h2>Stocks</h2>
        {
          this.stockCards()
        }
      </div>
    );
  }

}

export default StockContainer;
