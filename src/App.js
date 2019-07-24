import React, { Component} from "react";
import { hot } from 'react-hot-loader';
import "./css/App.css";
import Main from './containers';

class App extends Component{
  render(){
    return(
        <div className="App">
          <Main />
        </div>
    );
  }
}

export default hot(module)(App);
