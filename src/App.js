import React, {Component} from 'react';
import './App.css';
import PrisonContainer from './containers/PrisonContainer'


class App extends Component {

  render() {
    return (
      <div>
      <h1>HMRC CodeClan</h1>
        <PrisonContainer/>
      </div>
    );
  }
}
export default App;
