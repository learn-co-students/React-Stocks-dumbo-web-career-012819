import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

    portfolioData = () => {
        return this.props.portfolio.map(portfolio => <Stock  handleClick={this.props.handleClick} key={portfolio.id} stock={portfolio} />)
    }

  render() {
      // console.log(this.props.portfolio)
    return (
      <div>
        <h2>My Portfolio</h2>
          {
            this.portfolioData()
          }
      </div>
    );
  }

}

export default PortfolioContainer;
