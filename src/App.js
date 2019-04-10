import React, { Component } from 'react';
import Header from './components/Header'
import MainContainer from './containers/MainContainer'

class App extends Component {

    state = {
        stocks: [],
        portfolio:[]
    }

    componentDidMount(){
        fetch('http://localhost:3000/stocks')
        .then(res => res.json())
        .then(data => {
            this.setState({
                stocks: data
            })
        })
    }

    handleAdd = (id) => {
        const foundStock = this.state.stocks.find(stock => stock.id === id)
        this.setState({
            portfolio: foundStock
        },() => console.log(this.state.portfolio))
    }

  render() {
    return (
      <div>
        <Header/>
        <MainContainer stocks={this.state.stocks} portfolio={this.state.portfolio} handleAdd={this.handleAdd}/>
      </div>
    );
  }
}

export default App;
