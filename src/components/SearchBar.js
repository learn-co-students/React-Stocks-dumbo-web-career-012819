import React from 'react';

class SearchBar extends React.Component {

    state = {
        toggle: false
    }

    toggleState = () => {
        this.setState({
            toggle: !this.state.toggle
        })
    }

    render(){
      return (
        <div>

          <strong>Sort by:</strong>
          <label>
            <input type="radio" value="Alphabetically" checked={!this.state.toggle} onChange={(event)=> {this.props.handleRadioState(event);this.toggleState()}}/>
            Alphabetically
          </label>
          <label>
            <input type="radio" value="Price" checked={this.state.toggle} onChange={(event)=> {this.props.handleRadioState(event);this.toggleState()}}/>
            Price
          </label>
          <br/>

          <label>
            <strong>Filter:</strong>
            <select onChange={this.props.filterState}>
              <option value="Tech">Tech</option>
              <option value="Sportswear">Sportswear</option>
              <option value="Finance">Finance</option>
            </select>
          </label>


        </div>
      );
    }
}


export default SearchBar;
