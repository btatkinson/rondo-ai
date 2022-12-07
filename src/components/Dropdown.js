
import React, { Component } from 'react';

class Dropdown extends Component {
    constructor(props) {
      super(props);
      this.state = { selectedTeam: props.teams[0] };
      this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange(event) {
        this.setState({ selectedTeam: event.target.value});
    }
  
    render() {
      return (
        <label>
          Team:
          <select value={this.state.selectedTeam} onChange={this.handleChange}>
            {this.props.teams.map((team) => (
              <option key={team.id} value={team.name}>{team.name}</option>
            ))}
          </select>
        </label>
      );
    }
  }


  export default Dropdown
