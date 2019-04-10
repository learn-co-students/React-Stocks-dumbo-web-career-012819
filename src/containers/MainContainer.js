import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {



  render() {
    return (
      <div>
        <SearchBar/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.props.stocks} handleAdd={this.props.handleAdd}/>

            </div>
            <div className="col-4">

              <PortfolioContainer portfolios={this.props.portfolio}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
