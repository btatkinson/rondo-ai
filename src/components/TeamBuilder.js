import React, { useState, useRef, useEffect  } from 'react';

const TeamBuilder = () => {

  const initialPlayers = [    { id: 5, name: 'John Doe' },    { id: 6, name: 'Jane Doe' },    { id: 7, name: 'Bob Smith' },    { id: 8, name: 'Alice Smith' },  ];
  const initialTeam = [    { id: 1, name: 'Savir Wheeler' },    { id: 2, name: 'Jacob Toppin' },    { id: 3, name: 'Oscar Tshiebwe' },    { id: 4, name: 'Cason Wallace' },  ];

  const [searchResult, setSearchResult] = useState([])

  const searchBarRef = useRef(null);
  // Use the useState hook to create a state variable called "players"
  // and a function to update it called "setPlayers"
  const [players, setPlayers] = useState(initialPlayers);

  // Use the useState hook to create a state variable called "team"
  // and a function to update it called "setTeam"
  const [team, setTeam] = useState(initialTeam);

  // Function to add a player to the team
  const addPlayerToTeam = player => {
    // Make a copy of the current team
    const newTeam = [...team];

    // Add the player to the team
    newTeam.push(player);

    // Update the state with the new team
    setTeam(newTeam);

    removePlayerFromPlayers(player)
  }

    // Function to add a player to the team
    const addPlayerToPlayers = player => {
    // Make a copy of the current players
    const newPlayers = [...players];

    // Add the player to the team
    newPlayers.push(player);

    // Update the state with the new team
    setPlayers(newPlayers);
    clearSearch();
    }

  const removePlayerFromPlayers = player => {
    // Make a copy of the current team
    const newPlayers = [...players];

    // Find the index of the player in the team
    const index = newPlayers.indexOf(player);

    // Remove the player from the team
    newPlayers.splice(index, 1);

    // Update the state with the new team
    setPlayers(newPlayers);
    clearSearch();
  }

  // Function to remove a player from the team
  const removePlayerFromTeam = player => {
    // Make a copy of the current team
    const newTeam = [...team];

    // Find the index of the player in the team
    const index = newTeam.indexOf(player);

    // Remove the player from the team
    newTeam.splice(index, 1);

    // Update the state with the new team
    setTeam(newTeam);
    addPlayerToPlayers(player)
    console.log(players)
  }

  // Function to filter the list of players based on search query
  const filterPlayers = () => {
    // Get the current value of the search bar
    const query = searchBarRef.current.value.toLowerCase();

    const filteredPlayers = []
    
    // Filter the list of players based on the search query
    if (query.length >0){
        const filteredPlayers = players.filter(player => player.name.toLowerCase().includes(query));
        // Update the state with the filtered list of players
        setSearchResult(filteredPlayers);
    } 
    else{
        const filteredPlayers = [];
        setSearchResult(filteredPlayers);
    }
    
  }

  // Function to clear the search bar and refresh the player list
  const clearSearch = () => {
    // Reset the search bar
    searchBarRef.current.value = '';

    // Reset the list of players to the initial list of players
    setPlayers(players);
    setSearchResult([]);
  }


  return (
    <div>
      {/* Search bar to filter players */}
      <input
        ref={searchBarRef}
        type="text"
        placeholder="Search players"
        id="search-bar"
        onChange={event => filterPlayers()}
      />
      <button onClick={clearSearch}>x</button>

      {/* List of players */}
      <ul>
        {searchResult.map(player => (
          <li key={player.id}>
            {player.name}
            {/* Button to add player to team */}
            <button onClick={() => addPlayerToTeam(player)}>+</button>
          </li>
        ))}
      </ul>

      {/* List of players on the team */}
      <ul>
        {team.map(player => (
          <li key={player.id}>
            {player.name}
            {/* Button to remove player from team */}
            <button onClick={() => removePlayerFromTeam(player)}>-</button>
          </li>
        ))}
      </ul>
    </div>
  );
}


export default TeamBuilder;