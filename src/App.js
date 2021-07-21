import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import Nav from "./components/Nav";
import Counters from "./components/Counters";
class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
      { id: 5, value: 0 },
    ],
  };
  handleDelete = (counter) => {
    let counters1 = [...this.state.counters];
    counters1 = counters1.filter((counterItem) => counterItem.id != counter.id);
    this.setState({ counters: counters1 });
  };
  handleIncrement = (counter) => {
    let counters1 = [...this.state.counters];
    let index = counters1.indexOf(counter);
    counters1[index] = { ...counter };
    counters1[index].value++;
    this.setState({ counters: counters1 });
  };
  handleDecrement = (counter) => {
    let counters1 = [...this.state.counters];
    let index = counters1.indexOf(counter);
    counters1[index] = { ...counter };
    counters1[index].value--;
    this.setState({ counters: counters1 });
  };
  render() {
    return (
      <React.Fragment>
        <Nav
          activeCounters={
            this.state.counters.filter((counter) => counter.value > 0).length
          }
        />
        <Counters
          counters={this.state.counters}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
        ></Counters>
      </React.Fragment>
    );
  }
}

export default App;
