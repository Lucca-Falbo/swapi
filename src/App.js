import React, { Component } from "react";
import "./App.css";
import Selects from './Selects';
import SimpleTable from './Table';
import ButtonPesquisar from "./ButtonPesquisar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Selects />
        <ButtonPesquisar />
        <SimpleTable />
      </div>
    );
  }
}

export default App;
