import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

    portfolioData = () => {
        return this.props.portfolios.map(portfolio => < Stock key={portfolio.id} stock={portfolio} />)
    }

  render() {
      console.log('what is state', this.props.portfolio)
    return (
      <div>
        <h2>My Portfolio</h2>
          {
            //render your portfolio stocks here
          }
      </div>
    );
  }

}

export default PortfolioContainer;
