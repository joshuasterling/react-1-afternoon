import React from 'react';

class FilterObject extends React.Component {
  render() {
    return (
      <div className='puzzleBox filterObjectPB'>
        <h4>Filter Objects</h4>
    <span className='puzzleText'>Original: {JSON.stringify(this.state.pokemon, null, 10)} </span>
        <input className='inputLine' onChange={(event) => this.handleChange(event.target.value)} />
        <button className='confirmationButton' onClick={() => this.filteredPokemon(this.state.userInput)}>Filter</button>
    <span className='resultsBox filterObjectRB'>Filtered: {JSON.stringify(this.state.filteredPokemon, null, 10)} </span>
      </div>
    )
  }

  constructor() {
    super();

    this.state = {
      pokemon: [
        {
          name: 'pikachu',
          type: 'electric',
          level: 60,
          size: 'small'
        },
        {
          name: 'Squirtle',
          type: 'water',
          level: 30,
          move: 'watergun'
        },
        {
          name: 'Charizard',
          type: 'fire',
          level: 99,
          flight: true
        }
      ],

      userInput: '',
      filteredPokemon: []
    }
  }

  handleChange(val) {
    this.setState({userInput: val});
  }

  filteredPokemon(prop) {
    let pokemon = this.state.pokemon;
    let filteredPokemon = [];

    pokemon.forEach(element => {
      if (element.hasOwnProperty(prop)) {
        filteredPokemon.push(element);
      }
      return filteredPokemon;
    })
    
    this.setState({filteredPokemon: filteredPokemon});
  }
}

export default FilterObject;