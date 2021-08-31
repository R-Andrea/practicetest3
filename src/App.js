import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import './App.css';
import MenuIcon from '@material-ui/icons/Menu';

function App() {

  
  return (
    <div className="App">
      <div className="nav">
      <Button className="button" variant="contained"><MenuIcon className="hamburger"></MenuIcon></Button>
      </div>
      <div className="articles">

        <Button className="button" variant="contained">This is my button</Button>
      </div>
    </div>
  );
}

export default App;
