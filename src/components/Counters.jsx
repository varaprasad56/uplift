import React, { Component } from "react";
import Counter from "./Counter";
class Counters extends Component {
  render() {
    return (
      <div className="container m-3">
        {this.props.counters.map((counter) => {
          return (
            <Counter
              key={counter.id}
              counter={counter}
              onIncrement={this.props.onIncrement}
              onDecrement = {this.props.onDecrement}
              onDelete = {this.props.onDelete}
            ></Counter>
          );
        })}
      </div>
    );
  }
}

export default Counters;
