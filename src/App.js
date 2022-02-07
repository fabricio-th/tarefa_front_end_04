import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import AddItem from './AddItem';


class App extends Component {
  render(){
    return (
      <div className="App">
      <header className="App-header">

        <AddItem />
        
      </header>
    </div>
    );
  }
}


export default App;
