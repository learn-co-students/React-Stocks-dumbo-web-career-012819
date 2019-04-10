import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {


  render() {
    console.log(this.props.filter)
    const handleFilter = this.props.stocks.map(stock => {
      if (this.props.filter === "All") {
        return <Stock handleClick={this.props.handleClick} key={stock.id} stock={stock} />
      }
      else if (this.props.filter === stock.type) {
        return <Stock handleClick={this.props.handleClick} key={stock.id} stock={stock} />
      }
      else if (this.props.filter === stock.type) {
        return <Stock handleClick={this.props.handleClick} key={stock.id} stock={stock} />
      }
      else if (this.props.filter === stock.type) {
        return <Stock handleClick={this.props.handleClick} key={stock.id} stock={stock} />
      }
    })
    return (
      <div>
        <h2>Stocks</h2>
        {handleFilter}
      </div>
    );
  }

}

export default StockContainer;
