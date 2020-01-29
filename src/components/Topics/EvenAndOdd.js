import React from 'react';

class EvenAndOdd extends React.Component {
  render() {
    return (
      <div className="puzzleBox evenAndOddPB">
        <h4>Even and Odds</h4>
        <input className="inputLine" onChange={event => this.handleChange(event.target.value)} />
        <button className="confirmationButton" onClick={() => {this.assignEvenAndOdds(this.state.userInput)}}> Split </button>
        <span className="resultsBox"> Evens: {JSON.stringify(this.state.evenArray)} </span>
        <span className="resultsBox"> Odds: {JSON.stringify(this.state.oddArray)} </span>
      </div>
    )
  }

  constructor() {
    super();

    this.state = {
      evenArray: [],
      oddArray: [],
      userInput: ''
    }
  }

  handlechange(val) {
    this.setState({userInput: val});
  }

  assignEvenAndOdds(userInput) {
    let arr = userInput.split(',');
    let even = [];
    let odd = [];

    arr.forEach(element => {
      if (element % 2 === 0) {
        even.push(parseInt(element));
      } else {
        odd.push(parseInt(element));
      }
    })
    this.setState({evenArray: even, oddArray: odd});
  }
}

export default EvenAndOdd;