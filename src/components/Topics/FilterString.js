import React from 'react';

class FilterString extends React.Component {
  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4>Filter String</h4>
        <span className="puzzleText">Names: {JSON.stringify(this.state.names, null, 10)}</span>
        <input className="inputLine" onChange={(event) => this.handleChange(event.target.value)} />
        <button className="confirmationButton" onClick={() => this.filteredNames(this.state.userInput)}> Filter </button>
        <span className="resultsBox filterStringRB"> Filtered Names: {JSON.stringify(this.state.filteredNames, null, 10)}</span>
      </div>
    )
  }

  constructor() {
    super();

    this.state = {
      names: ['James', 'Jessica', 'Melody', 'Tyler', 'Blake', 'Jennifer', 'Mark', 'Maddy'],
      userInput: '',
      filteredNames: []
    };
  }

  handleChange(val) {
    this.setState({userInput: val});
  }

  filteredNames(userInput) {
    let names = this.state.names;
    let filteredNames = [];
    
    names.forEach(element => {
      if (element.includes(userInput)) {
        filteredNames.push(element);
      }
      return filteredNames;
    })
    this.setState({filteredNames: filteredNames});
  }
}

export default FilterString;