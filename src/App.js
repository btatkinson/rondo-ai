
// import Dropdown from './components/Dropdown';
// import AddPlayer from './components/AddPlayer.js';
// import {PlayerForm, PlayerDataProvider} from './components/PlayerForm.js';
import TeamBuilder from './components/TeamBuilder';
import logo from './logo.svg';
import './App.css';

function App() {

  const teams = [
    { id: 1, name: 'Team 1' },
    { id: 2, name: 'Team 2' },
    { id: 3, name: 'Team 3' },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      {/* <PlayerDataProvider>
        <PlayerForm />
      </PlayerDataProvider>
      <Dropdown teams={teams}/>
      <AddPlayer /> */}
      <TeamBuilder />

    </div>
  );
}

export default App;
