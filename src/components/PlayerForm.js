import React, { createContext, Component } from 'react';

// Create a context for storing player data
const PlayerContext = createContext();

// Define a component that will store the player data in state
class PlayerDataProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [
        { id: 1, name: 'Player 1', position: 'Forward' },
        { id: 2, name: 'Player 2', position: 'Midfielder' },
        { id: 3, name: 'Player 3', position: 'Defender' },
      ],
    };
  }

  render() {
    return (
      // Provide the player data to any component that needs it
      <PlayerContext.Provider value={this.state.players}>
        {this.props.children}
      </PlayerContext.Provider>
    );
  }
}

// Define a component that needs access to the player data
class PlayerForm extends Component {
  static contextType = PlayerContext;

  render() {
    return (
      <ul>
        {this.context.map((player) => (
          <li key={player.id}>{player.name}</li>
        ))}
      </ul>
    );
  }
}

export {PlayerDataProvider, PlayerForm};

