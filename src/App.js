// import logo from './logo.svg';
import ScoreKeeper from './components/scoreKeeper/ScoreKeeper';
import IconList from './components/iconList/IconList';
import Lottery from './components/lottery/Lottery';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
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
      </header> */}

      {/* <ScoreKeeper/> */}
      {/* <IconList/> */}
      <Lottery/>
    </div>
  );
}

export default App;
