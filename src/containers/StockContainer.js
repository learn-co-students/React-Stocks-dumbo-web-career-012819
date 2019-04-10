import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

    stocksData = () => {
        return this.props.stocks.map(stock => < Stock key={stock.id} stock={stock} handleAdd={this.props.handleAdd} />)
    }
  render() {
    return (
      <div>
        <h2>Stocks</h2>
        {
          this.stocksData()
        }
      </div>
    );
  }

}

export default StockContainer;
