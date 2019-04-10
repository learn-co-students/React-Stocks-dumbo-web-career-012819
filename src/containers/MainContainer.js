import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state = {
    stocks: [],
    sold: [],
    filter: ""
  }

  componentDidMount(){
    fetch('http://localhost:3000/stocks')
    .then(res => res.json())
    .then(stocksJSON => {
      this.setState({
        stocks: stocksJSON
      },() => console.log("Hello", this.state.stocks))
    })
  }

  handleClick = (stock) => {
    const copy = [...this.state.sold]
    const newarray = [...copy, stock]
    this.setState({
      sold: newarray
    },() => console.log(this.state.sold))
  }

  sellStock = (stock) => {
    const soldStock = this.state.sold.filter(stockSold => stockSold.id !== stock.id)


      this.setState({
        sold: soldStock
      },() => console.log("sold", this.state.sold))

  }

  handleSort = (event) => {
    const copyStock = [...this.state.stocks]

      if (event === "Alphabetically"){
        const newarry = copyStock.sort(function(a, b){
            if(a.ticker < b.ticker) { return -1; }
            if(a.ticker > b.ticker) { return 1; }
            return 0;
        })
        this.setState({
          stocks: newarry
        })
      }
      else if (event === "Price") {
        const newarry = copyStock.sort(function(a, b){
            if(a.price < b.price) { return 1; }
            if(a.price > b.price) { return -1; }
            return 0;
        })
        this.setState({
          stocks: newarry
        })
      }
  }

handleFilter = (event) => {
    this.setState({
      filter: event
    })
}

  render() {
    return (
      <div>
        <SearchBar handleFilter={this.handleFilter} handleSort={this.handleSort}/>

          <div className="row">
            <div className="col-8">

              <StockContainer filter={this.state.filter} handleClick={this.handleClick} stocks={this.state.stocks} />

            </div>
            <div className="col-4">

              <PortfolioContainer sellStock={this.sellStock} sold={this.state.sold}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
