import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

    state = {
        stocks: [],
        sorted: [],
        purchased: [],
        radio: "",
    }

    componentDidMount(){
        fetch(`http://localhost:4000/stocks`)
        .then(res => res.json())
        .then(stocks => {
            this.setState({
                stocks: stocks
            })
        })
    }

    handleBuyStock = (stock) => {
        this.setState({
            purchased: [...this.state.purchased, stock]
        })
    }

    handleSellStock = (purchasedStock) => {
        const filteredStock = this.state.purchased.filter(stock => stock.id !== purchasedStock.id )
            this.setState({
                purchased: filteredStock
            })
        }

        handleRadioState = (event) => {
            if(event.target.value === "Alphabetically"){
                const alpha =  this.state.stocks.sort((a,b)=>{
                    return a.name < b.name ? -1 : 1
                })
                this.setState({
                    sorted: alpha
                })
            } else if(event.target.value === "Price"){
                const price = this.state.stocks.sort((a,b)=>{
                    return a.price > b.price ? -1 : 1
                })
                this.setState({
                    sorted: price
                })
            }
        }

            // this.setState({
            //     sorted: event.target.value
            // })


        filterState = (event) => {
            const filtered = this.state.stocks.filter(stock => stock.type === event.target.value)
            this.setState({
                sorted: filtered
            })

        }


  render() {
      console.log(this.state.filter);
    return (
      <div>
        <SearchBar filterState={this.filterState} handleRadioState={this.handleRadioState}/>

          <div className="row">
            <div className="col-8">

              <StockContainer handleBuyStock={this.handleBuyStock} stocks={this.state.sorted.length === 0 ? this.state.stocks : this.state.sorted}/>

            </div>
            <div className="col-4">

              <PortfolioContainer handleSellStock={this.handleSellStock} purchased={this.state.purchased}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
