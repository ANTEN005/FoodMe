import React, { Component } from 'react';
/* import Layout from './Components/Layout/Layout';
 */
import Routes from "./Routes";
import Toolbar from './Components/Layout/Toolbar';
import layout from './Components/Layout/Layout';


class App extends Component {
  render() {
    return (
      <div>
        <layout/>
            <Toolbar/> 
            <Routes/>
        <layout/>
      </div>
    );
  }
}

export default App;
