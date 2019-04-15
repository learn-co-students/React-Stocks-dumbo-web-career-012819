import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

    state = {
        portfolio: [],
        sortedStocks: this.props.stocks,
        type: 'All',
        sort: ''

    }

    handleAddToPortfolio = (stock) => {
        this.setState({
            portfolio: [...this.state.portfolio, stock]
        }, () => console.log(this.state.portfolio))
    }

    handleDeleteFromPortfolio = (stock) => {
        const newArray = this.state.portfolio.filter(s => s.id !== stock.id)
        this.setState({
            portfolio: newArray
        })
    }
//==========Sort methods===========
    compareAsc = (a, b) => {
    const keyA = a.name;
    const keyB = b.name;

    let comparison = 0;
    if (keyA > keyB) {
      comparison = 1;
    } else if (keyA < keyB) {
      comparison = -1;
    }
    return comparison;
  }

  sorting = () => {
      if (this.state.sort === "Alphabetically") {

          this.setState({
              sortedStocks: this.state.sortedStocks.sort(this.compareAsc)
          }, () => console.log(this.state.sortedStocks))
      }
  }



    stockSorted = e => {
        this.setState({
            sort: e.target.value
        })
    }
//============Sort methods==============




//====================Filtered=============
    handleChange = e => {
        this.setState({
            type: e.target.value
        })
    }

    filteredList = () => {
        if (this.state.type === "All") {
            return this.props.stocks
        } else {
            return this.props.stocks.filter(stock => stock.type === this.state.type)
        }
    }
//^^^^^^^^^^^^^^^^Filtered^^^^^^^^^^^^^^^^^^^
  render() {
      console.log(this.state.sortedStocks)
    return (
      <div>
        <SearchBar  sortedStocks={this.state.sortedStocks} handleChange={this.handleChange} stockSorted={this.stockSorted}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.filteredList()} handleClick={this.handleAddToPortfolio} />

            </div>
            <div className="col-4">

              <PortfolioContainer portfolio={this.state.portfolio} handleClick={this.handleDeleteFromPortfolio} />

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
