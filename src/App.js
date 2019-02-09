import React, { Component } from "react";
import Title from "./components/Title";
import Flames from "./components/Flames";
import Form from "./components/Form";

class App extends Component {
  state = {
    loveScore: 0
  };

  getLoveScore = score => {
    this.setState({
      loveScore: score
    });
  };

  render() {
    return (
      <div className="App">
        <Title />
        <Form getLoveScore={this.getLoveScore} />
        <Flames loveScore={this.state.loveScore} />
      </div>
    );
  }
}

export default App;
