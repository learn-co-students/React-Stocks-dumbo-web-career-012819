import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

    stockData = () => {
        return this.props.stocks.map(stock => <Stock handleClick={this.props.handleClick} key={stock.id} stock={stock} />)
    }


  render() {
    return (
      <div>
        <h2>Stocks</h2>
        {
            this.stockData()
        }
      </div>
    );
  }

}

export default StockContainer;
