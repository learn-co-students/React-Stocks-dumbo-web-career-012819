import React from 'react';

class SearchBar extends React.Component {
  state = {
    sortBy: ''
  }

  handleRadioButton = event => {
    this.setState({
      sortBy: event.target.value
    })

    this.props.handleSort(event.target.value)
  }

  render() {
    return (
      <div>
        <strong>Sort by:</strong>
        <label>
          <input
            type="radio"
            value="Alphabetically"
            checked={this.state.sortBy === 'Alphabetically'}
            onChange={this.handleRadioButton} />
          Alphabetically
        </label>
        <label>
          <input
            type="radio"
            value="Price"
            checked={this.state.sortBy === 'Price'}
            onChange={this.handleRadioButton} />
          Price
        </label>
        <br/>

        <label>
          <strong>Filter:</strong>
          <select onChange={(event) => this.props.handleFilter(event.target.value)}>
            <option value="All">All</option>
            <option value="Tech">Tech</option>
            <option value="Sportswear">Sportswear</option>
            <option value="Finance">Finance</option>
          </select>
        </label>


      </div>
    )
  }
}


export default SearchBar;
